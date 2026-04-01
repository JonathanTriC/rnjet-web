import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PhoneMockups from "@/components/PhoneMockups";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "RNJet — React Native Boilerplate & CLI Starter Kit",
	description:
		"Skip weeks of React Native setup. RNJet is a production-ready boilerplate & CLI with Clean Architecture, i18n, MMKV storage, React Navigation & New Architecture — bootstrapped in one command.",
	alternates: {
		canonical: "https://rnjet.jonathantri.com",
	},
};

export default function Home() {
	return (
		<main>
			<div className="bg-noise"></div>
			<div className="fixed top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-900/20 via-[#0d1117] to-transparent pointer-events-none -z-10 animate-fade-in"></div>
			<Navbar />
			<HeroSection />
			<PhoneMockups />
			<FeaturesGrid />
			<WhySection />
			<Footer />
		</main>
	);
}
