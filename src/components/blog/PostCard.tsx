import Link from 'next/link';

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function PostCard({
  title,
  slug,
  date,
  description,
  tags,
  readingTime,
}: PostCardProps) {
  return (
    <article className="group">
      <Link
        href={`/posts/${slug}`}
        className="block p-6 -mx-6 rounded-lg transition-colors duration-200 hover:bg-bg-secondary"
      >
        <div className="flex flex-col gap-3">
          {/* Date and reading time */}
          <div className="flex items-center gap-3 text-sm text-text-tertiary font-body">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="text-text-muted">·</span>
            <span>{readingTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-display text-text-primary group-hover:text-accent-coral transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary font-body leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-body text-text-tertiary bg-bg-tertiary rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
