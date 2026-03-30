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

const features = [
	{
		icon: Terminal,
		title: "CLI-based generator",
		desc:
			"Instantly generate modules, components, and services with standard-compliant naming conventions.",
	},
	{
		icon: Cpu,
		title: "New Architecture Ready",
		desc:
			"Built from the ground up to support Fabric and JSI for near-native performance levels.",
	},
	{
		icon: Layers,
		title: "Clean & Scalable Architecture",
		desc:
			"Enforced separation of concerns using a modular folder structure that scales with your team.",
	},
	{
		icon: Globe,
		title: "Multi-language (i18n)",
		desc:
			"Full internationalization support baked in with i18next and type-safe translation keys.",
	},
	{
		icon: Database,
		title: "Persistent Storage (MMKV)",
		desc:
			"Ultra-fast synchronous storage powered by MMKV, outperforming traditional Async Storage.",
	},
	{
		icon: Navigation,
		title: "React Navigation Setup",
		desc:
			"Production-ready navigation setup with React Navigation, fully wired and ready to extend.",
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
		<section className="py-20 px-6">
			<div
				ref={gridRef}
				className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
			>
				{features.map((f, i) => {
					const Icon = f.icon;
					return (
						<div
							key={i}
							className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:bg-card/80 transition-all duration-200"
							style={{
								opacity: visible ? 1 : 0,
								transform: visible ? "translateY(0)" : "translateY(32px)",
								transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100}ms`,
							}}
						>
							<Icon size={24} className="text-primary mb-4" />
							<h3 className="font-heading font-bold text-foreground text-lg mb-2">
								{f.title}
							</h3>
							<p className="font-body text-sm text-muted-foreground leading-relaxed">
								{f.desc}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FeaturesGrid;
