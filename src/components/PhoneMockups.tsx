"use client";

import Image from "next/image";

const PhoneMockups = () => {
	return (
		<section className="py-20 px-6">
			<div className="flex justify-center items-end hero-fade-5">
				{/* Dark phone */}
				<div className="flex flex-col items-center">
					<Image
						src="/dark-mode.svg"
						alt="RNJet Dark Theme"
						width={280}
						height={600}
						loading="eager"
						priority
						className="rounded-[2.5rem] border-2 border-foreground/10"
						style={{
							width: "260px",
							height: "auto",
							filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
						}}
					/>
					<span className="mt-4 text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">
						Dark Theme
					</span>
				</div>

				{/* Light phone */}
				<div className="flex flex-col items-center -ml-10 -mt-6 relative">
					<Image
						src="/light-mode.svg"
						alt="RNJet Light Theme"
						width={280}
						height={600}
						className="rounded-[2.5rem] border-2 border-foreground/10"
						style={{
							width: "260px",
							height: "auto",
							filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
						}}
					/>
					<span className="mt-4 text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">
						Light Theme
					</span>
				</div>
			</div>
		</section>
	);
};

export default PhoneMockups;
