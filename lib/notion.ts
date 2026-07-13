import { cache } from "react";
import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export type SeoPage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
};

function extractText(property: PageObjectResponse["properties"][string] | undefined): string {
  if (!property) return "";
  if (property.type === "title") return property.title.map((t) => t.plain_text).join("");
  if (property.type === "rich_text") return property.rich_text.map((t) => t.plain_text).join("");
  return "";
}

// Tolère les variantes de nommage de colonnes Notion (espaces superflus, suffixes type "Slug (titre)").
function findProperty(
  properties: PageObjectResponse["properties"],
  name: string
): PageObjectResponse["properties"][string] | undefined {
  const target = name.trim().toLowerCase();
  const key = Object.keys(properties).find((k) => k.trim().toLowerCase().startsWith(target));
  return key ? properties[key] : undefined;
}

// Normalise une valeur Notion libre (majuscules, accents, espaces) en slug d'URL valide.
function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const getSeoPages = cache(async (): Promise<SeoPage[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) return [];

  try {
    const database = await notion.databases.retrieve({ database_id: databaseId });
    const dataSourceId = "data_sources" in database ? database.data_sources[0]?.id : undefined;
    if (!dataSourceId) return [];

    const response = await notion.dataSources.query({ data_source_id: dataSourceId });

    return response.results
      .filter((page): page is PageObjectResponse => page.object === "page" && "properties" in page)
      .map((page) => ({
        slug: slugify(extractText(findProperty(page.properties, "Slug"))),
        keyword: extractText(findProperty(page.properties, "TargetKeyword")).trim(),
        title: extractText(findProperty(page.properties, "MetaTitle")).trim(),
        description: extractText(findProperty(page.properties, "MetaDescription")).trim(),
      }))
      .filter((entry) => entry.slug.length > 0);
  } catch (error) {
    console.warn("[notion] getSeoPages failed, skipping expertise pages:", error);
    return [];
  }
});
