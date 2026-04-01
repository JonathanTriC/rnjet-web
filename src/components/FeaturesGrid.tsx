"use client";

import { useEffect, useRef, useState } from "react";
import {
	Terminal,
	Cpu,
	Layers,
	Globe,
	Database,
	Navigation,
} from "lucide-react";
import Link from "next/link";

const features = [
	{
		icon: Terminal,
		title: "React Native Module Generator CLI",
		desc: "Instantly scaffold modules, components, and services with a single command — standard-compliant naming conventions enforced automatically.",
		href: "/docs/architecture/project-structure",
	},
	{
		icon: Cpu,
		title: "React Native New Architecture (Fabric + JSI)",
		desc: "Built from the ground up to support Fabric and JSI. Near-native performance levels out of the box — no migration needed.",
		href: "/docs/architecture/tech-stack",
	},
	{
		icon: Layers,
		title: "Clean Architecture — Feature-Based Folder Structure",
		desc: "Enforced separation of concerns with a modular folder structure. Scales cleanly from solo projects to large teams.",
		href: "/docs/architecture/project-structure",
	},
	{
		icon: Globe,
		title: "i18n in React Native with i18next — Built In",
		desc: "Full internationalization with i18next and type-safe translation keys. English and Bahasa Indonesia included. Add any language in minutes.",
		href: "/docs/guides/i18n",
	},
	{
		icon: Database,
		title: "MMKV Storage — Faster Than AsyncStorage",
		desc: "Ultra-fast synchronous storage powered by MMKV with AES-256 encryption. No async/await, no headaches — orders of magnitude faster.",
		href: "/docs/architecture/tech-stack",
	},
	{
		icon: Navigation,
		title: "React Navigation v7 Pre-Configured Setup",
		desc: "Production-ready navigation with typed screens, nested stacks, and a useNavigate hook — fully wired and ready to extend.",
		href: "/docs/architecture/tech-stack",
	},
];

const FeaturesGrid = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = gridRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="py-20 px-6" aria-label="Features">
			<div className="max-w-6xl mx-auto mb-12 text-center">
				<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
					Everything a Production React Native App Needs
				</h2>
				<p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
					Stop making the same configuration decisions on every project. RNJet
					packages 6 weeks of setup into a single command.
				</p>
			</div>
			<div
				ref={gridRef}
				className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
			>
				{features.map((f, i) => {
					const Icon = f.icon;
					return (
						<Link
							href={f.href}
							key={i}
							className="group bg-card rounded-xl p-6 border border-border hover:border-primary hover:bg-card/80 transition-all duration-200 block"
							style={{
								opacity: visible ? 1 : 0,
								transform: visible ? "translateY(0)" : "translateY(32px)",
								transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`,
							}}
						>
							<Icon size={24} className="text-primary mb-4" />
							<h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
								{f.title}
							</h3>
							<p className="font-body text-sm text-muted-foreground leading-relaxed">
								{f.desc}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default FeaturesGrid;
