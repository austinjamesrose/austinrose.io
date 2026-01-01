import { PostCard } from './PostCard';

interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

interface PostListProps {
  posts: Post[];
  title?: string;
}

export function PostList({ posts, title }: PostListProps) {
  if (posts.length === 0) {
    return (
      <section className="py-8">
        {title && (
          <h2 className="text-2xl font-display text-text-primary mb-8">
            {title}
          </h2>
        )}
        <div className="text-center py-12">
          <p className="text-text-secondary font-body">
            No posts found.
          </p>
          <p className="text-text-tertiary font-body text-sm mt-2">
            Check back later for new content.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-display text-text-primary mb-8">
          {title}
        </h2>
      )}
      <div className="flex flex-col divide-y divide-border-subtle">
        {posts.map((post) => (
          <div key={post.slug} className="py-6 first:pt-0 last:pb-0">
            <PostCard
              title={post.title}
              slug={post.slug}
              date={post.date}
              description={post.description}
              tags={post.tags}
              readingTime={post.readingTime}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
