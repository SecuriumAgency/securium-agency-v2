import { getSeoPages } from "@/lib/notion";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const pages = await getSeoPages();
  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    return new Response("# 404 - Page introuvable\n", {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }

  const lines = [`# ${page.title || page.slug}`];

  if (page.keyword) {
    lines.push("", `**Mot-cle cible :** ${page.keyword}`);
  }

  if (page.description) {
    lines.push("", "## Resume", "", page.description);
  }

  const markdown = `${lines.join("\n")}\n`;

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
