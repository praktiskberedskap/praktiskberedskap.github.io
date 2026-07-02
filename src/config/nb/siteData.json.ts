import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Praktisk Beredskap",
	// Your website's title and description (meta fields)
	title: "Praktisk Beredskap",
	description:
		"Alt du trenger for å komme i gang med egenberedskap",
	// Your information!
	author: {
		name: "Per Øyvind",
		email: "test@test.no",
		twitter: "Twittertesten",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/og-image.jpg",
		alt: "Praktisk beredskap",
	},
};

export default siteData;
