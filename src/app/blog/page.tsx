import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight } from "lucide-react";
import React from "react";
import Nav from "@/components/nav";
import { db } from "@/server/db";
import { desc } from "drizzle-orm";
import { posts } from "@/server/db/schema";

export default async function BlogsPage() {
	const allPosts = await db.query.posts.findMany({
		orderBy: [desc(posts.date)],
	});

	return (
		<React.Fragment>
			<Nav solidBg />
			<main className="flex-1">
				<section className="w-full py-12 md:py-16 lg:py-24 bg-gray-100">
					<div className="container max-sm:px-4">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Cybersecurity Insights
						</h1>
						<p className="mt-4 text-gray-500 md:text-xl">
							Stay informed about the latest in cybersecurity trends, threats,
							and best practices.
						</p>
					</div>
				</section>
				<section className="w-full py-12 md:py-16 lg:py-20">
					<div className="container max-sm:px-4">
						<div className="flex flex-col md:flex-row gap-10">
							<div className="md:w-2/3 space-y-4">
								<h2 className="text-2xl font-bold">Latest Posts</h2>
								{allPosts.map((post) => (
									<Card key={post.id}>
										<CardHeader className="p-4 md:p-6">
											<CardTitle className="md:text-xl text-lg">
												{post.title}
											</CardTitle>
										</CardHeader>
										<CardContent className="p-4 md:p-6 pt-0 md:pt-0 space-y-3">
											<div className="flex gap-3 items-center text-gray-500">
												<span className="text-xs sm:text-sm">
													{new Date(post.date ?? "").toLocaleDateString(
														"en-IN",
														{
															dateStyle: "medium",
														},
													)}
												</span>
												<span> - </span>
												<span className="text-xs sm:text-sm">{post.tags}</span>
											</div>
										</CardContent>
										<CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
											<Link
												className="text-blue-600 hover:underline flex items-center"
												href={`/blog/${post.slug}`}
											>
												Read more
												<ChevronRight className="w-4 h-4 ml-1" />
											</Link>
										</CardFooter>
									</Card>
								))}
							</div>
							<div className="md:w-1/3">
								<div className="sticky top-20 space-y-6">
									<Card>
										<CardHeader>
											<CardTitle>Search</CardTitle>
										</CardHeader>
										<CardContent>
											<form className="flex w-full max-w-sm items-center space-x-2">
												<Input type="search" placeholder="Search articles" />
												<Button type="submit" size="icon">
													<Search className="size-4" />
													<span className="sr-only">Search</span>
												</Button>
											</form>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Categories</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="flex flex-wrap gap-2">
												<Badge>Threat Intelligence</Badge>
												<Badge>Network Security</Badge>
												<Badge>Data Protection</Badge>
												<Badge>Cloud Security</Badge>
												<Badge>Incident Response</Badge>
											</div>
										</CardContent>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Popular Posts</CardTitle>
										</CardHeader>
										<CardContent>
											<ul className="space-y-4">
												<li>
													<Link
														className="text-blue-600 hover:underline"
														href="#"
													>
														10 Cybersecurity Myths Debunked: Separating Fact
														from Fiction in Digital Security
													</Link>
												</li>
												<li>
													<Link
														className="text-blue-600 hover:underline"
														href="#"
													>
														The Importance of Multi-Factor Authentication in
														Today's Threat Landscape
													</Link>
												</li>
												<li>
													<Link
														className="text-blue-600 hover:underline"
														href="#"
													>
														Ransomware: Prevention and Recovery Strategies for
														Businesses of All Sizes
													</Link>
												</li>
											</ul>
										</CardContent>
									</Card>
								</div>
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
