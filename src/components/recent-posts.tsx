import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { desc } from "drizzle-orm";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function RecentPosts() {
	const allPosts = await db.query.posts.findMany({
		orderBy: [desc(posts.date)],
		limit: 3,
	});
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container max-sm:px-4">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 md:mb-12">
					Latest Posts
				</h2>
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{allPosts.map((post) => (
						<div key={post.slug} className="flex flex-col space-y-2">
							<span className="text-sm text-gray-500">
								{new Date(post.date ?? "").toLocaleDateString("en-IN", {
									dateStyle: "medium",
								})}
							</span>
							<h3 className="text-xl font-bold">{post.title}</h3>
							<Link
								className="inline-flex items-center text-blue-600 hover:underline"
								href={`/blog/${post.slug}`}
							>
								Read more
								<ChevronRight className="ml-1 h-4 w-4" />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
