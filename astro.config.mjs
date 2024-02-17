import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://salteadorneo.github.io',
  base: '/tab-recorder-indie-hackers',
  integrations: [tailwind()]
});