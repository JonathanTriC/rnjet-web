import type { MetadataRoute } from "next";

const siteUrl = "https://rnjet.jonathantri.com";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${siteUrl}/docs`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/docs/getting-started/installation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/docs/architecture/project-structure`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${siteUrl}/docs/architecture/tech-stack`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${siteUrl}/docs/guides/i18n`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${siteUrl}/docs/guides/api-layer`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${siteUrl}/docs/guides/theming`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${siteUrl}/docs/environment/configuration`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];
}
