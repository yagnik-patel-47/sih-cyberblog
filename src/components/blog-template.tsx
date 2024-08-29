import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Nav from "./nav";
import type { Post } from "@/server/db/schema";
import PersonSvg from "@/assets/person.svg";

interface Props {
	data: Post;
}

export default function BlogTemplate(props: Props) {
	return (
		<React.Fragment>
			<Nav solidBg />
			<main className="flex-1">
				<article className="mx-auto py-10 max-sm:px-4 max-w-prose w-full">
					<Link
						href="/blog"
						className="inline-flex items-center text-blue-600 hover:underline mb-4 text-base"
					>
						<ChevronLeft className="w-4 h-4 mr-1" />
						Back to Blog
					</Link>
					<h1 className="text-3xl md:text-4xl font-extrabold mb-6 prose">
						{props.data.title}
					</h1>
					<div className="flex items-center space-x-4 mb-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							id="Person"
							className="size-7 md:size-8 inline-block"
						>
							<title>Person</title>
							<g fill="currentColor">
								<path
									d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
									fill="currentColor"
								/>
							</g>
						</svg>
						<div>
							<p className="text-sm font-medium !my-0">{props.data.author}</p>
							<div className="flex items-center text-sm text-gray-500">
								<Calendar className="w-4 h-4 mr-1" />
								<span>
									{new Date(props.data.date ?? "").toLocaleDateString("en-IN", {
										dateStyle: "medium",
									})}
								</span>
								{/* <Clock className="w-4 h-4 ml-4 mr-1" />
								<span>10 min read</span> */}
							</div>
						</div>
					</div>
					<div
						className="prose lg:prose-lg"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: props.data.body ?? "" }}
					/>
				</article>
				<section className="bg-gray-100 py-12">
					<div className="container max-sm:px-4 mx-auto">
						<h2 className="text-2xl font-bold mb-6">Related Posts</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle className="text-xl">
										Securing Your Remote Workforce: Best Practices for 2023
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-500 mb-4">
										With remote work becoming the norm, ensuring the security of
										your distributed team is more crucial than ever. Discover
										the top strategies to protect your organization.
									</p>
									<Link
										className="text-blue-600 hover:underline flex items-center"
										href="#"
									>
										Read more
										<ChevronRight className="w-4 h-4 ml-1" />
									</Link>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle className="text-xl">
										The Future of Quantum Cryptography in Cybersecurity
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-500 mb-4">
										Explore how quantum computing is set to revolutionize
										encryption and the potential impacts on current
										cybersecurity practices.
									</p>
									<Link
										className="text-blue-600 hover:underline flex items-center"
										href="#"
									>
										Read more
										<ChevronRight className="w-4 h-4 ml-1" />
									</Link>
								</CardContent>
							</Card>
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
