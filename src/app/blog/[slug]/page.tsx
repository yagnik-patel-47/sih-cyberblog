import BlogTemplate from "@/components/blog-template";
import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function BlogPost({
	params,
}: { params: { [key: string]: string } }) {
	const post = await db.query.posts.findFirst({
		where: eq(posts.id, params.slug),
	});
	if (!post) return <p>post not found</p>;
	return <BlogTemplate data={post} />;
}
