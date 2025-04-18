import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js 15 - PWA Template',
    short_name: 'Next15PWA',
    description: 'Template para aplicações PWA com Next.js 15',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF',
    theme_color: '#000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
