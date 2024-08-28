"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export default function () {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 150)
				containerRef.current?.classList.add("bg-slate-800");
			else containerRef.current?.classList.remove("bg-slate-800");
		});
	}, []);

	return (
		<div
			className="text-white fixed top-0 w-full z-10 transition-all duration-200"
			ref={containerRef}
		>
			<header className="py-4 container flex items-center">
				<Link className="flex items-center justify-center" href="/">
					<Shield className="size-5 lg:size-6 2xl:size-7" />
					<span className="ml-2 text-base lg:text-lg 2xl:text-xl font-bold">
						CyberSecInfo
					</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm 2xl:text-base font-medium hover:underline underline-offset-4"
						href="/"
					>
						Home
					</Link>
					<Link
						className="text-sm 2xl:text-base font-medium hover:underline underline-offset-4"
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className="text-sm 2xl:text-base font-medium hover:underline underline-offset-4"
						href="/about"
					>
						About
					</Link>
				</nav>
			</header>
		</div>
	);
}
