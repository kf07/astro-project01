import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
	  react({include: ['**/react/*']}),
	  solidJs({include: ['**/solid/*']}),
	  qwikdev({include: ['**/qwik/*'] }),
	  svelte(),]
});
