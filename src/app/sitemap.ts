import type { MetadataRoute } from 'next'
import { ARTIGOS } from '@/content/artigos'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://auraenergypalmas.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const artigosSitemap: MetadataRoute.Sitemap = ARTIGOS.map((art) => ({
    url: `${BASE_URL}/artigos/${art.slug}`,
    lastModified: new Date(art.dataPublicacao),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // LP mãe + 4 segmentadas (públicas, prioridade alta)
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/casa`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/comercio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industria`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rural`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Páginas de funil (médio peso)
    {
      url: `${BASE_URL}/diagnostico`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/orcamento`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/cartao`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // Hub /artigos · listagem
    {
      url: `${BASE_URL}/artigos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Cada artigo individual · long-tail SEO
    ...artigosSitemap,
  ]
}
