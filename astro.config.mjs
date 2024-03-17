import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://daena-araekhar.github.io',
  base:'/araekh/',
  integrations: [tailwind(), mdx()]
});