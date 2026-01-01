import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// Directory where posts are stored
const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * Frontmatter structure for blog posts
 */
export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  image?: string;
  author?: string;
}

/**
 * Complete post data including content and computed fields
 */
export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

/**
 * Post metadata without content (for listings)
 */
export interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

/**
 * Tag with its count of posts
 */
export interface TagWithCount {
  tag: string;
  count: number;
}

/**
 * Get all MDX files from the posts directory
 */
function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

/**
 * Parse a single post file and return its data
 */
function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter
  const { data, content } = matter(fileContents);
  const frontmatter = data as PostFrontmatter;

  // Calculate reading time
  const readingTimeResult = readingTime(content);

  return {
    slug,
    frontmatter,
    content,
    readingTime: readingTimeResult,
  };
}

/**
 * Get all published (non-draft) posts sorted by date (newest first)
 */
export function getAllPosts(): PostMeta[] {
  const files = getPostFiles();

  const posts = files
    .map((fileName) => {
      const post = parsePost(fileName);
      // Return metadata without content for listings
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      };
    })
    // Filter out drafts
    .filter((post) => !post.frontmatter.draft)
    // Sort by date (newest first)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });

  return posts;
}

/**
 * Get a single post by its slug
 * Returns null if not found or if it's a draft
 */
export function getPostBySlug(slug: string): Post | null {
  const fileName = `${slug}.mdx`;
  const fullPath = path.join(postsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const post = parsePost(fileName);

  // Return null for drafts unless in development
  if (post.frontmatter.draft && process.env.NODE_ENV !== "development") {
    return null;
  }

  return post;
}

/**
 * Get all posts filtered by a specific tag
 */
export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getAllPosts();
  const normalizedTag = tag.toLowerCase();

  return allPosts.filter((post) =>
    post.frontmatter.tags.some((t) => t.toLowerCase() === normalizedTag)
  );
}

/**
 * Get all unique tags with their post counts
 */
export function getAllTags(): TagWithCount[] {
  const allPosts = getAllPosts();
  const tagMap = new Map<string, number>();

  allPosts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase();
      tagMap.set(normalizedTag, (tagMap.get(normalizedTag) || 0) + 1);
    });
  });

  // Convert to array and sort by count (descending), then alphabetically
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.tag.localeCompare(b.tag);
    });
}

/**
 * Get all post slugs (useful for static generation)
 */
export function getAllPostSlugs(): string[] {
  const files = getPostFiles();
  return files.map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.featured);
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): PostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) {
    return [];
  }

  const allPosts = getAllPosts();
  const currentTags = new Set(
    currentPost.frontmatter.tags.map((t) => t.toLowerCase())
  );

  // Score each post by number of shared tags
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.frontmatter.tags.filter((t) =>
        currentTags.has(t.toLowerCase())
      ).length;
      return { post, score: sharedTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map((item) => item.post);
}
