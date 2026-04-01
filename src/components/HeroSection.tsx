"use client";

import { Copy, Check, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
	const [copied, setCopied] = useState(false);
	const command = "npx @jonathantri/rnjet init";

	const handleCopy = async () => {
		await navigator.clipboard.writeText(command);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			className="relative overflow-hidden pt-32 pb-20 px-6"
			aria-label="Hero"
		>
			<div className="noise-overlay" />

			{/* Radial cyan glow */}
			<div
				className="absolute left-1/2 top-0 -translate-x-1/2 w-200 h-100 pointer-events-none z-0 animate-glow-pulse"
				style={{
					background:
						"radial-gradient(ellipse 60% 40% at 50% 50%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 max-w-3xl mx-auto text-center">
				{/* Version badge — links to GitHub releases */}
				<div className="hero-fade-1 flex justify-center mb-8">
					<a
						href="https://github.com/jonathantric/rnjet-boilerplate/releases"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8 animate-fade-up hover:bg-sky-500/20 transition-colors"
					>
						<span className="flex h-2 w-2 relative">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
						</span>
						v1.1.2 is now available — see what&apos;s new →
					</a>
				</div>

				<h1 className="hero-fade-2 font-heading font-extrabold text-5xl md:text-6xl lg:text-[64px] leading-[1.08] text-foreground mb-6">
					The React Native Boilerplate That Gets You to{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-sky-200">
						Features on Day One.
					</span>
				</h1>

				<p className="hero-fade-3 font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
					Tired of spending 2 weeks configuring navigation, themes, and API
					layers before writing a single feature?{" "}
					<strong className="text-foreground">RNJet</strong> bootstraps a
					fully-configured, production-grade React Native starter kit — Clean
					Architecture, New Architecture, i18next, MMKV, React Navigation —
					wired up in one command.
				</p>

				{/* Terminal block */}
				<div
					className="hero-fade-4 max-w-140 mx-auto rounded-xl overflow-hidden border border-border mb-10"
					style={{ backgroundColor: "#1e2433" }}
				>
					<div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50">
						<div className="flex gap-2">
							<span className="w-3 h-3 rounded-full bg-red-500" />
							<span className="w-3 h-3 rounded-full bg-yellow-500" />
							<span className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<span className="text-xs text-muted-foreground font-body">ZSH</span>
						<button
							onClick={handleCopy}
							aria-label="Copy install command"
							className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
						>
							{copied ? <Check size={13} /> : <Copy size={13} />}
							{copied ? "Copied!" : "Copy"}
						</button>
					</div>
					<div className="p-6 text-left font-mono text-sm overflow-x-auto whitespace-nowrap">
						<span className="text-slate-600 select-none mr-3">$</span>
						<span className="text-sky-400 font-medium">npx </span>
						<span className="text-slate-300">@jonathantri/rnjet init</span>
						<span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse align-middle" />
					</div>
				</div>

				<div className="hero-fade-5 flex items-center justify-center gap-4 flex-wrap">
					<Link
						href="/docs/getting-started/installation"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all shadow-lg shadow-sky-500/20 tracking-tight text-sm"
					>
						Get Started Free
						<BookOpen size={16} />
					</Link>
					<a
						href="https://github.com/jonathantric/rnjet-boilerplate/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all tracking-tight text-sm"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
						View on GitHub
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
