import { marked } from "marked";

// Renderer markdown -> HTML cravado pra artigos Aura.
// Suporta: headings com {#anchor-id}, tabelas GFM, listas, bold, italic, links,
// inline code, blockquote.
export function renderMarkdown(md: string): string {
  let html = marked.parse(md, { gfm: true, breaks: false }) as string;

  // Post-process: "## Texto {#anchor}" vira <h2 id="anchor">Texto</h2>
  html = html.replace(
    /<(h[1-6])>([^<]*?)\s+\{#([\w-]+)\}<\/\1>/g,
    '<$1 id="$3">$2</$1>'
  );

  return html;
}

export type TocItem = {
  level: 2 | 3; // h2 ou h3 · ignora h1 (título) e h4+ (granular demais)
  text: string;
  id: string;
};

// Extrai sumário de um markdown cravado · busca "## Texto {#anchor}" e
// "### Texto {#anchor}". Usado pelo TOC sticky lateral em /artigos/[slug].
export function extractToc(md: string): TocItem[] {
  const regex = /^(#{2,3})\s+(.+?)\s+\{#([\w-]+)\}\s*$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(md)) !== null) {
    const level = (match[1].length === 2 ? 2 : 3) as 2 | 3;
    items.push({ level, text: match[2].trim(), id: match[3] });
  }
  return items;
}
