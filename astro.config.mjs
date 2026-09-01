import astroEmbedIntegration from 'astro-embed/integration';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://praktiskberedskap.no",
	output: 'static',
	redirects: {
		"/admin": "/keystatic",
		"/vann-og-mat/slik-lagrer-du-vann/": "/blog/slik-lagrer-du-vann/",
		"/lys-og-varme/hvordan-varme-mat-nar-strommen-er-borte/": "/blog/hvordan-varme-mat-nar-strommen-er-borte/",
		"/mental-beredskap/mental-egenberedskap-og-resiliens/": "/blog/mental-egenberedskap-og-resiliens/"
	},
	// i18n configuration must match src/config/translationData.json.ts
	i18n: {
		defaultLocale: "nb",
		locales: ["nb"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	markdown: {
		shikiConfig: {
			// Shiki Themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: "dracula",
			wrap: true,
		},
	},

	integrations: [
		// example auto import component into blog post mdx files
		AutoImport({
			imports: [
				// https://github.com/delucis/astro-auto-import
				"@components/Admonition/Admonition.astro",
				"@components/Button/Button.astro",
				"@components/Newsletter/Newsletter.astro",
			],
		}),
		astroEmbedIntegration(),
		mdx(),
		react(),
		icon(),
		...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
		sitemap({
            filter: (page) => !page.includes('/tags/'),
        }),
		compress({
			HTML: false,
			JavaScript: true,
			CSS: false, // enabling this can cause issues
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		// stop inlining short scripts to fix issues with ClientRouter
		build: {
			assetsInlineLimit: 0,
		},
	},
});
