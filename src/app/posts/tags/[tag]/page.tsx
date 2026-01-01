import { Metadata } from "next";
import { Container } from "@/components/layout";
import { PostList, TagList } from "@/components/blog";
import { getPostsByTag, getAllTags } from "@/lib/posts";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((t) => ({ tag: t.tag }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return {
    title: `Posts tagged "${capitalizedTag}"`,
    description: `Browse all posts tagged with "${capitalizedTag}".`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  // Capitalize tag for display
  const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  // Transform posts for PostList component
  const postsForList = posts.map((post) => ({
    title: post.frontmatter.title,
    slug: post.slug,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    tags: post.frontmatter.tags,
    readingTime: post.readingTime.text,
  }));

  // Transform tags for TagList component
  const tagsForList = allTags.map((t) => ({
    name: t.tag,
    count: t.count,
  }));

  return (
    <section className="py-24 md:py-32">
      <Container>
        <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-8">
          Posts tagged &ldquo;{displayTag}&rdquo;
        </h1>
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12">
          {posts.length} {posts.length === 1 ? "post" : "posts"} found.
        </p>

        {/* Tag filter */}
        <div className="mb-12">
          <TagList tags={tagsForList} activeTag={tag} />
        </div>

        {/* Posts list */}
        <PostList posts={postsForList} />
      </Container>
    </section>
  );
}
