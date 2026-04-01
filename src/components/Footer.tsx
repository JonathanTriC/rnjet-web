import Link from "next/link";

const footerLinks = [
	{
		heading: "Product",
		links: [
			{ label: "Documentation", href: "/docs" },
			{ label: "Installation Guide", href: "/docs/getting-started/installation" },
			{ label: "Architecture", href: "/docs/architecture/project-structure" },
			{ label: "Tech Stack", href: "/docs/architecture/tech-stack" },
		],
	},
	{
		heading: "Resources",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/jonathantric/rnjet-boilerplate/",
				external: true,
			},
			{
				label: "npm Package",
				href: "https://www.npmjs.com/package/@jonathantri/rnjet",
				external: true,
			},
			{
				label: "Releases",
				href: "https://www.npmjs.com/package/@jonathantri/rnjet?activeTab=versions",
				external: true,
			},
		],
	},
	{
		heading: "Author",
		links: [
			{
				label: "Portfolio",
				href: "https://jonathantri.com/",
				external: true,
			},
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/jonathan-tri-christianto/",
				external: true,
			},
		],
	},
];

const Footer = () => (
	<footer className="border-t border-border py-12 px-6">
		<div className="max-w-6xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
				{/* Brand */}
				<div>
					<span className="font-heading font-bold text-foreground text-xl block mb-3">
						RNJet
					</span>
					<p className="text-sm text-muted-foreground leading-relaxed">
						The production-ready React Native boilerplate & CLI that gets your team to
						features on day one.
					</p>
				</div>

				{/* Link columns */}
				{footerLinks.map((col) => (
					<div key={col.heading}>
						<h4 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
							{col.heading}
						</h4>
						<ul className="space-y-3">
							{col.links.map((link) => (
								<li key={link.label}>
									{"external" in link && link.external ? (
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.label}
										</a>
									) : (
										<Link
											href={link.href}
											className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-xs text-muted-foreground">
					© 2026 RNJet. Released under the{" "}
					<a
						href="https://github.com/JonathanTriC/rnjet-boilerplate?tab=MIT-1-ov-file#readme"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-foreground transition-colors"
					>
						MIT License
					</a>
					.
				</p>
				<p className="text-xs text-muted-foreground">
					Built by{" "}
					<a
						href="https://jonathantri.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-foreground transition-colors"
					>
						Jonathan Tri
					</a>{" "}
					— React Native Developer
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
