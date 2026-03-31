import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "RNJet — Production-Ready React Native Apps",
	description:
		"Bootstrap scalable, clean, and fully-configured mobile apps with modern architecture.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
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
