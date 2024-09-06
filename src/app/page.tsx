import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Shield,
	AlertTriangle,
	BookOpen,
	ChevronRight,
	Lock,
} from "lucide-react";
import Nav from "@/components/nav";
import React, { Suspense } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RecentPosts from "@/components/recent-posts";

export default function HomePage() {
	return (
		<React.Fragment>
			<Nav fixed />
			<main>
				<section className="w-full lg:min-h-dvh flex items-center py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white selection:bg-blue-500">
					<div className="container max-sm:px-4">
						<div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Defend Your Digital Frontier
									</h1>
									<p className="max-w-[600px] text-gray-200 md:text-xl">
										Stay ahead of cyber threats with real-time alerts, expert
										analysis, and actionable insights.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										className={cn(
											buttonVariants({ variant: "default" }),
											"bg-slate-100 text-blue-700 hover:bg-slate-300",
										)}
										href={"/blog"}
									>
										Get Started
										<ChevronRight className="ml-2 h-4 w-4" />
									</Link>
									<Link
										className={cn(
											buttonVariants({ variant: "outline" }),
											"bg-transparent text-white border-white hover:bg-white/10 hover:text-white",
										)}
										href={"/about"}
									>
										Learn More
									</Link>
								</div>
								<div className="flex items-center space-x-2 text-sm text-gray-200">
									<AlertTriangle className="h-4 w-4" />
									<span>
										Over 2,300 cyber attacks occur every day. Are you protected?
									</span>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]">
									<div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse" />
									<div className="absolute inset-4 bg-blue-600 rounded-full opacity-20 animate-pulse animation-delay-500" />
									<div className="absolute inset-8 bg-blue-700 rounded-full opacity-20 animate-pulse animation-delay-1000" />
									<div className="absolute inset-0 flex items-center justify-center">
										<Lock className="size-16 sm:size-32 text-slate-200" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container max-sm:px-4">
						<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-4 text-center">
								<AlertTriangle className="h-10 w-10 text-blue-700" />
								<h2 className="text-xl font-bold">Latest Incidents</h2>
								<p className="text-gray-500 dark:text-gray-400">
									Real-time updates on major cybersecurity breaches and attacks
									worldwide.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<Shield className="h-10 w-10 text-blue-700" />
								<h2 className="text-xl font-bold">Emerging Threats</h2>
								<p className="text-gray-500 dark:text-gray-400">
									Insights into new and evolving cybersecurity threats and
									vulnerabilities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<BookOpen className="h-10 w-10 text-blue-700" />
								<h2 className="text-xl font-bold">Best Practices</h2>
								<p className="text-gray-500 dark:text-gray-400">
									Expert advice and guidelines to enhance your cybersecurity
									posture.
								</p>
							</div>
						</div>
					</div>
				</section>
				<Suspense
					fallback={
						<div className="h-96 grid place-content-center md:text-lg font-semibold">
							loading...
						</div>
					}
				>
					<RecentPosts />
				</Suspense>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container max-sm:px-4">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Stay Ahead of Cyber Threats
								</h2>
								<p className="max-w-[900px] text-gray-500 text-sm md:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
									Join our community of cybersecurity professionals and
									enthusiasts. Get real-time alerts, in-depth analysis, and
									expert insights.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input
										className="max-w-lg flex-1"
										placeholder="Enter your email"
										type="email"
									/>
									<Button type="submit">Subscribe</Button>
								</form>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									Get our weekly cybersecurity newsletter. No spam, unsubscribe
									anytime.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2023 CyberSecInfo. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</React.Fragment>
	);
}
