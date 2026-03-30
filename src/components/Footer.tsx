const FooterLink = [
	{ label: "Portfolio", href: "https://jonathantri.com/" },
	{
		label: "GitHub",
		href: "https://github.com/jonathantric/rnjet-boilerplate/",
	},
	{ label: "Docs", href: "" },
];
const Footer = () => (
	<footer className="border-t border-border py-8 px-6">
		<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
			<div className="text-center md:text-left">
				<span className="font-heading font-bold text-foreground text-lg">
					RNJet
				</span>
				<p className="text-xs text-muted-foreground mt-1">
					© 2026 RNJet. Released under MIT License.
				</p>
			</div>

			<div className="flex gap-6">
				{FooterLink.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	</footer>
);

export default Footer;
