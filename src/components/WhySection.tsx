"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
	{
		feature: "New Architecture (Fabric + JSI)",
		rnjet: true,
		expo: true,
		bare: true,
	},
	{
		feature: "Clean Architecture folder structure",
		rnjet: true,
		expo: false,
		bare: false,
	},
	{
		feature: "CLI code generator (modules, services)",
		rnjet: true,
		expo: false,
		bare: false,
	},
	{
		feature: "MMKV persistent storage wired up",
		rnjet: true,
		expo: false,
		bare: false,
	},
	{
		feature: "i18n (i18next) pre-configured",
		rnjet: true,
		expo: false,
		bare: false,
	},
	{
		feature: "TanStack Query + Axios API layer",
		rnjet: true,
		expo: false,
		bare: false,
	},
	{
		feature: "Environment config (dev/prod) split",
		rnjet: true,
		expo: true,
		bare: false,
	},
	{
		feature: "Full native module access",
		rnjet: true,
		expo: false,
		bare: true,
	},
	{
		feature: "Zero lock-in — fully ejectable",
		rnjet: true,
		expo: false,
		bare: true,
	},
];

const WhySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = sectionRef.current;
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
		<section
			ref={sectionRef}
			className="py-24 px-6 border-t border-border"
			aria-label="Why RNJet"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateY(0)" : "translateY(32px)",
				transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
			}}
		>
			<div className="max-w-6xl mx-auto">
				{/* Why RNJet */}
				<div className="text-center mb-16">
					<h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
						Why Choose RNJet Over Other React Native Boilerplates?
					</h2>
					<p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
						Most React Native starters either do too little (bare bones) or too much
						(opinionated to the point of being impossible to customize). RNJet hits
						the sweet spot — everything you need for a real production app, nothing
						you don&apos;t.
					</p>
				</div>

				{/* Three-column value props */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					<div className="bg-card rounded-xl p-8 border border-border">
						<div className="text-4xl mb-4">⚡</div>
						<h3 className="font-heading font-bold text-foreground text-xl mb-3">
							Ship in Days, Not Weeks
						</h3>
						<p className="font-body text-muted-foreground text-sm leading-relaxed">
							Navigation, themes, API layers, environment configs, i18n, storage — all
							configured and wired up before you write your first feature. Stop losing
							the first 2 weeks of every project to boilerplate.
						</p>
					</div>

					<div className="bg-card rounded-xl p-8 border border-sky-500/30 ring-1 ring-sky-500/20">
						<div className="text-4xl mb-4">🏗️</div>
						<h3 className="font-heading font-bold text-foreground text-xl mb-3">
							Architecture That Scales With Your Team
						</h3>
						<p className="font-body text-muted-foreground text-sm leading-relaxed">
							Enforced separation of concerns via a feature-based module structure.
							Whether you&apos;re solo or a team of 10, the codebase stays organized as
							it grows — domain, data, and UI layers clearly separated.
						</p>
					</div>

					<div className="bg-card rounded-xl p-8 border border-border">
						<div className="text-4xl mb-4">🔓</div>
						<h3 className="font-heading font-bold text-foreground text-xl mb-3">
							No Lock-In, Full Native Access
						</h3>
						<p className="font-body text-muted-foreground text-sm leading-relaxed">
							Unlike Expo managed workflow, RNJet gives you full access to the native
							layer. Integrate any native SDK, fork native modules, run custom build
							configs — you own the entire stack.
						</p>
					</div>
				</div>

				{/* Comparison table */}
				<div>
					<h2 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
						RNJet vs Expo Starter vs Bare React Native
					</h2>
					<div className="overflow-x-auto rounded-xl border border-border">
						<table className="w-full text-sm font-body">
							<thead>
								<tr className="border-b border-border bg-secondary/30">
									<th className="text-left px-6 py-4 text-muted-foreground font-medium">
										Feature
									</th>
									<th className="text-center px-6 py-4 text-sky-400 font-bold">RNJet</th>
									<th className="text-center px-6 py-4 text-muted-foreground font-medium">
										Expo Starter
									</th>
									<th className="text-center px-6 py-4 text-muted-foreground font-medium">
										Bare React Native
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisonData.map((row, i) => (
									<tr
										key={i}
										className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors"
									>
										<td className="px-6 py-4 text-foreground">{row.feature}</td>
										<td className="px-6 py-4 text-center">
											{row.rnjet ? (
												<Check
													size={18}
													className="inline text-sky-400"
													aria-label="Supported"
												/>
											) : (
												<X
													size={18}
													className="inline text-red-500/60"
													aria-label="Not supported"
												/>
											)}
										</td>
										<td className="px-6 py-4 text-center">
											{row.expo ? (
												<Check
													size={18}
													className="inline text-green-400/70"
													aria-label="Supported"
												/>
											) : (
												<X
													size={18}
													className="inline text-red-500/60"
													aria-label="Not supported"
												/>
											)}
										</td>
										<td className="px-6 py-4 text-center">
											{row.bare ? (
												<Check
													size={18}
													className="inline text-green-400/70"
													aria-label="Supported"
												/>
											) : (
												<X
													size={18}
													className="inline text-red-500/60"
													aria-label="Not supported"
												/>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhySection;
