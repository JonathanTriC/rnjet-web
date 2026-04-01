import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

const siteUrl = "https://rnjet.jonathantri.com";

export const metadata: Metadata = {
	title: {
		default: "RNJet — React Native Boilerplate & CLI Starter Kit",
		template: "%s | RNJet",
	},
	description:
		"Skip weeks of React Native setup. RNJet is a production-ready boilerplate & CLI with Clean Architecture, i18n, MMKV storage, React Navigation & New Architecture — bootstrapped in one command.",
	keywords: [
		"react native boilerplate",
		"react native starter kit",
		"react native cli",
		"react native template",
		"react native clean architecture",
		"react native new architecture",
		"react native mmkv",
		"react native i18n",
		"react native production",
		"react native scaffold",
		"npx react native boilerplate",
		"rnjet",
	],
	authors: [{ name: "Jonathan Tri", url: "https://jonathantri.com" }],
	creator: "Jonathan Tri",
	metadataBase: new URL(siteUrl),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "RNJet",
		title: "RNJet — React Native Boilerplate & CLI Starter Kit",
		description:
			"Skip weeks of React Native setup. Bootstrap a production-ready app with Clean Architecture, i18n, MMKV, React Navigation & New Architecture — in one command.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "RNJet — React Native Boilerplate & CLI Starter Kit",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "RNJet — React Native Boilerplate & CLI Starter Kit",
		description:
			"Skip weeks of React Native setup. Bootstrap a production-ready app with Clean Architecture, i18n, MMKV & New Architecture — in one command.",
		images: ["/og-image.png"],
		creator: "@jonathantric",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SoftwareApplication",
							name: "RNJet",
							applicationCategory: "DeveloperApplication",
							operatingSystem: "iOS, Android",
							description:
								"Production-ready React Native boilerplate and CLI tool. Bootstrap a scalable, clean, fully-configured mobile app with Clean Architecture, i18n, MMKV, and New Architecture support.",
							url: siteUrl,
							author: {
								"@type": "Person",
								name: "Jonathan Tri",
								url: "https://jonathantri.com",
							},
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "USD",
							},
							softwareVersion: "1.1.2",
							license: "https://opensource.org/licenses/MIT",
						}),
					}}
				/>
			</head>
			<body className="flex flex-col min-h-screen">
				<RootProvider
					theme={{
						enabled: false,
						defaultTheme: "dark",
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
