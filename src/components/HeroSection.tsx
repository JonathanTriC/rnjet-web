"use client";

import { Copy, Check, BookOpen, ArrowRight } from "lucide-react";
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
		<section className="relative overflow-hidden pt-32 pb-20 px-6">
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
				{/* Version badge */}
				<div className="hero-fade-1 flex justify-center mb-8">
					<a
						href="#"
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8 animate-fade-up hover:bg-sky-500/20 transition-colors"
					>
						<span className="flex h-2 w-2 relative">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
						</span>
						v1.1.2 is now available
						<ArrowRight size={14} />
					</a>
				</div>

				<h1 className="hero-fade-2 font-heading font-extrabold text-5xl md:text-6xl lg:text-[64px] leading-[1.08] text-foreground mb-6">
					Production-Ready React Native Apps{" "}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-sky-200">
						in Seconds.
					</span>
				</h1>

				<p className="hero-fade-3 font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
					Bootstrap scalable, clean, and fully-configured mobile apps with modern
					architecture. Stop wasting time on setup and start building features
					immediately.
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
							className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
						>
							{copied ? <Check size={13} /> : <Copy size={13} />}
							{copied ? "Copied!" : ""}
						</button>
					</div>
					<div className="p-6 text-left font-mono text-sm overflow-x-auto whitespace-nowrap">
						<span className="text-slate-600 select-none mr-3">$</span>
						<span className="text-sky-400 font-medium">npx </span>
						<span className="text-slate-300">@jonathantri/rnjet init</span>
						<span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse align-middle" />
					</div>
				</div>

				{/* Two CTA buttons */}
				<div className="hero-fade-5 flex items-center justify-center gap-4 flex-wrap">
					<Link
						href="/docs"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all shadow-lg shadow-sky-500/20 tracking-tight text-sm"
					>
						Read the Docs
						<BookOpen size={16} />
					</Link>
					<a
						href="https://github.com/jonathantric/rnjet-boilerplate/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all tracking-tight text-sm"
					>
						View on GitHub
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
