import { sql } from "drizzle-orm";
import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	title: text("title"),
	author: text("author"),
	tags: text("tags"),
	body: text("body"),
	date: date("date"),
	sourceUrl: text("source_url"),
});

export type Post = typeof posts.$inferSelect;
