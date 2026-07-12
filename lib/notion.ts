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
        slug: extractText(page.properties["Slug"]).trim(),
        keyword: extractText(page.properties["TargetKeyword"]).trim(),
        title: extractText(page.properties["MetaTitle"]).trim(),
        description: extractText(page.properties["MetaDescription"]).trim(),
      }))
      .filter((entry) => entry.slug.length > 0);
  } catch (error) {
    console.warn("[notion] getSeoPages failed, skipping expertise pages:", error);
    return [];
  }
});
