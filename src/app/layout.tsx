import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "RNJet — Production-Ready React Native Apps",
	description:
		"Bootstrap scalable, clean, and fully-configured mobile apps with modern architecture.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
