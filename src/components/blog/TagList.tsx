import Link from 'next/link';

interface Tag {
  name: string;
  count: number;
}

interface TagListProps {
  tags: Tag[];
  activeTag?: string;
}

export function TagList({ tags, activeTag }: TagListProps) {
  return (
    <nav className="overflow-x-auto pb-2 -mb-2">
      <ul className="flex gap-2 min-w-max">
        {/* All posts option */}
        <li>
          <Link
            href="/posts"
            className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body
              transition-colors duration-200
              ${
                !activeTag
                  ? 'bg-accent-coral text-white'
                  : 'bg-bg-tertiary text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
              }
            `}
          >
            All
          </Link>
        </li>

        {/* Tag pills */}
        {tags.map((tag) => (
          <li key={tag.name}>
            <Link
              href={`/posts/tags/${tag.name.toLowerCase()}`}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body
                transition-colors duration-200
                ${
                  activeTag === tag.name.toLowerCase()
                    ? 'bg-accent-coral text-white'
                    : 'bg-bg-tertiary text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                }
              `}
            >
              <span>{tag.name}</span>
              <span className="text-xs opacity-70">({tag.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
