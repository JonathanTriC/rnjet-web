import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
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
			),
		},
	};
}
