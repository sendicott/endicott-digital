import { defineConfig } from 'astro/config';

// Static output (Astro's default) — deployed as a plain `dist/` upload to Cloudflare Pages.
export default defineConfig({
  build: {
    // One-page site with a ~6 KB stylesheet: inline it and save a render-blocking request.
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      // Keep classic `max-width` media queries in the minified CSS rather than
      // the newer range syntax, so the breakpoint works in older browsers too.
      cssTarget: ['chrome90', 'safari15', 'firefox90'],
    },
  },
});
