"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
	solidBg?: boolean;
	fixed?: boolean;
}

export default function Nav(props: Props) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!props.solidBg)
			window.addEventListener("scroll", () => {
				if (window.scrollY > 60)
					containerRef.current?.classList.add("bg-slate-800");
				else containerRef.current?.classList.remove("bg-slate-800");
			});
	}, [props.solidBg]);

	return (
		<div
			className={cn(
				"text-white top-0 w-full z-10 transition-all duration-200",
				props.solidBg && "bg-slate-800",
				props.fixed ? "fixed" : "sticky",
			)}
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
