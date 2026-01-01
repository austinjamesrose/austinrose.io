import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Thoughts on People Analytics, data visualization, and the intersection of HR and technology.",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl mb-4">Posts</h1>
        <p className="opacity-70 mb-8">
          Thoughts on People Analytics, data visualization, and the
          intersection of HR and technology.
        </p>

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/posts"
              className="tag no-underline"
            >
              All
            </Link>
            {tags.map((t) => (
              <Link
                key={t.tag}
                href={`/posts/tags/${t.tag.toLowerCase()}`}
                className="tag no-underline"
              >
                {t.tag} ({t.count})
              </Link>
            ))}
          </div>
        )}

        {/* Posts list */}
        {posts.length > 0 ? (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-accent no-underline hover:underline text-lg font-medium"
                >
                  {post.frontmatter.title}
                </Link>
                <div className="flex items-center gap-2 text-sm opacity-60 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>
                    {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="opacity-50">·</span>
                  <span>{post.readingTime.text}</span>
                </div>
                <p className="mt-2 opacity-80">{post.frontmatter.description}</p>
                {post.frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="opacity-60">No posts yet. Check back soon!</p>
        )}
      </Container>
    </section>
  );
}
