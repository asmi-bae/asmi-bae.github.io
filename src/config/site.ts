/** Production site URLs — both custom domain and GitHub Pages work. */
export const SITE_URL = 'https://asmi-bae.github.io';

export const GITHUB_PAGES_URL = 'https://asmi-bae.github.io';

/** Custom domain for R2 image CDN. */
export const IMAGE_CDN_URL = 'https://images.asmi-bae.workers.dev';

/** Workers.dev fallback when custom domain DNS is not on Cloudflare yet. */
export const IMAGE_CDN_WORKERS_URL = 'https://portfolio-image-cdn.asmi-bae.workers.dev';

export const PRODUCTION_ORIGINS = [
  'https://asmi-bae.github.io',
  'https://www.asmi-bae.github.io',
] as const;

export const SITE_HOSTS = [
  'asmi-bae.github.io',
  'www.asmi-bae.github.io',
] as const;

export function isProductionHost(hostname: string): boolean {
  return (SITE_HOSTS as readonly string[]).includes(hostname);
}
