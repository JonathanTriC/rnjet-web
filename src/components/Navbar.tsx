import { Moon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image
						src="/logo.svg"
						alt="RNJet Logo"
						width={20}
						height={20}
						className="rounded-sm"
					/>
					<span className="font-heading font-extrabold text-lg text-foreground tracking-widest uppercase">
						RNJet
					</span>
				</div>
				<div className="flex items-center gap-6">
					<a
						href="#"
						className="text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors"
					>
						Docs
					</a>
					<a
						href="https://github.com/jonathantric/rnjet-boilerplate/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-body font-medium text-foreground hover:text-muted-foreground transition-colors"
					>
						GitHub
					</a>
					<button className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-secondary transition-colors">
						<Moon size={16} className="text-muted-foreground" />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
