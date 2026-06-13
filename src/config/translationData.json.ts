import navDataNb from "./nb/navData.json";
import siteDataNb from "./nb/siteData.json";

export const dataTranslations = {
	nb: {
		siteData: siteDataNb,
		navData: navDataNb,
	},
} as const;

export const textTranslations = {
	nb: {
		hero_description:
			"Alt du trenger for å komme i gang med egenberedskap",
		back_to_all_posts: "Tilbake til alle artikler",
		related_posts: "Relaterte artikler",
		share_this_post: "Del denne artikkelen!",
		updated: "Oppdatert",
		reading_time: "min lesetid",
		table_of_contents: "Innholdsfortegnelse",
	},
} as const;

export const routeTranslations = {
	nb: {
		overviewKey: "overview",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		tagKey: "tags",
		tagKey2: "tags/*",
		tagKey3: "tags",
		blogKey: "blog",
	},
} as const;

export const localizedCollections = {
	blog: {
		nb: "blog",
	},
} as const;