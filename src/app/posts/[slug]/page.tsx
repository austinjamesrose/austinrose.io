import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { MDXComponents } from "@/components/blog";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "Austin Rose"],
      tags: post.frontmatter.tags,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Compile MDX content
  const { content } = await compileMDX({
    source: post.content,
    components: MDXComponents,
  });

  // Format date
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <article className="py-24 md:py-32">
      <Container>
        {/* Back navigation */}
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-coral transition-colors duration-200 mb-12 group"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transform group-hover:-translate-x-1 transition-transform duration-200"
          >
            <path
              d="M15 10H5M5 10L10 5M5 10L10 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-body">Back to Posts</span>
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-text-primary mb-6">
            {post.frontmatter.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-text-secondary font-body">
            <time dateTime={post.frontmatter.date}>{formattedDate}</time>
            <span className="text-border-subtle">|</span>
            <span>{post.readingTime.text}</span>
          </div>

          {/* Tags */}
          {post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/posts/tags/${tag.toLowerCase()}`}
                  className="px-3 py-1 text-sm font-body bg-bg-tertiary text-text-secondary rounded-full hover:bg-bg-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        <div className="max-w-3xl">{content}</div>

        {/* Footer navigation */}
        <footer className="mt-16 pt-8 border-t border-border-subtle">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-accent-coral hover:text-accent-amber transition-colors duration-200 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transform group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path
                d="M15 10H5M5 10L10 5M5 10L10 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-body font-medium">Back to all posts</span>
          </Link>
        </footer>
      </Container>
    </article>
  );
}
