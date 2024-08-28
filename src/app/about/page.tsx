import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, BookOpen, Zap } from "lucide-react";
import React from "react";
import Nav from "@/components/nav";

const team = [
	{
		name: "Jane Doe",
		role: "Founder & CEO",
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		name: "John Smith",
		role: "Chief Security Officer",
		image: "/placeholder.svg?height=100&width=100",
	},
	{
		name: "Alice Johnson",
		role: "Head of Research",
		image: "/placeholder.svg?height=100&width=100",
	},
];

export default function AboutPage() {
	return (
		<React.Fragment>
			<Nav solidBg />
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container max-sm:px-4">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							About CyberSecInfo
						</h1>
						<p className="mt-4 text-gray-500 md:text-xl">
							Empowering individuals and organizations with cutting-edge
							cybersecurity knowledge and insights.
						</p>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container max-sm:px-4">
						<h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<Shield className="w-8 h-8 mb-2 text-blue-600" />
									<CardTitle>Protect</CardTitle>
								</CardHeader>
								<CardContent>
									Empower individuals and organizations to safeguard their
									digital assets against evolving cyber threats.
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<BookOpen className="w-8 h-8 mb-2 text-blue-600" />
									<CardTitle>Educate</CardTitle>
								</CardHeader>
								<CardContent>
									Provide accessible, up-to-date information on cybersecurity
									best practices, trends, and emerging threats.
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Zap className="w-8 h-8 mb-2 text-blue-600" />
									<CardTitle>Innovate</CardTitle>
								</CardHeader>
								<CardContent>
									Stay at the forefront of cybersecurity technology and
									methodologies to address the challenges of tomorrow.
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container max-sm:px-4">
						<h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{team.map((member) => (
								<Card key={member.name}>
									<CardContent className="flex flex-col items-center pt-6">
										<Avatar className="w-24 h-24 mb-4">
											<AvatarImage src={member.image} alt={member.name} />
											<AvatarFallback>
												{member.name
													.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
										<h3 className="text-lg font-semibold">{member.name}</h3>
										<p className="text-sm text-gray-500">{member.role}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container max-sm:px-4">
						<h2 className="text-3xl font-bold mb-8">Our Approach</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div>
								<h3 className="text-xl font-semibold mb-4">
									Comprehensive Coverage
								</h3>
								<p className="text-gray-500 mb-4">
									We cover a wide range of cybersecurity topics, from basic
									principles to advanced threat analysis, ensuring that our
									readers have access to a comprehensive knowledge base.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-4">Expert Insights</h3>
								<p className="text-gray-500 mb-4">
									Our content is crafted by seasoned cybersecurity
									professionals, researchers, and industry experts, providing
									you with reliable and actionable information.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-4">Timely Updates</h3>
								<p className="text-gray-500 mb-4">
									In the fast-paced world of cybersecurity, staying current is
									crucial. We continuously update our content to reflect the
									latest threats, vulnerabilities, and defense strategies.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-4">
									Practical Solutions
								</h3>
								<p className="text-gray-500 mb-4">
									We focus on providing practical, implementable solutions that
									our readers can apply to enhance their cybersecurity posture,
									whether they're individuals or large organizations.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
					<div className="container max-sm:px-4 text-center">
						<h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
						<p className="mb-8 text-lg">
							Stay informed about the latest cybersecurity trends and join our
							community of security-conscious individuals.
						</p>
						<Button className="bg-white text-blue-600 hover:bg-gray-100">
							Subscribe to Our Newsletter
						</Button>
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
