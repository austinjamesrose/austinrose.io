import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import Link from 'next/link';

export const MDXComponents: MDXComponentsType = {
  // Headings
  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl font-display font-medium text-text-primary mt-12 mb-6 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl font-display font-medium text-text-primary mt-10 mb-4"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-xl font-display font-medium text-text-primary mt-8 mb-3"
      {...props}
    >
      {children}
    </h3>
  ),

  // Paragraph
  p: ({ children, ...props }) => (
    <p
      className="text-text-secondary font-body leading-relaxed mb-6"
      {...props}
    >
      {children}
    </p>
  ),

  // Links
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-coral hover:text-accent-amber underline underline-offset-2 transition-colors duration-200"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href || '#'}
        className="text-accent-coral hover:text-accent-amber underline underline-offset-2 transition-colors duration-200"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Inline code
  code: ({ children, ...props }) => {
    // Check if this is inside a pre tag (code block) by looking at className
    const className = (props as { className?: string }).className || '';
    const isCodeBlock = className.includes('language-');

    if (isCodeBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="px-1.5 py-0.5 text-sm font-mono bg-bg-tertiary text-accent-coral rounded"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Code blocks
  pre: ({ children, ...props }) => (
    <pre
      className="p-4 my-6 bg-bg-secondary border border-border-subtle rounded-lg overflow-x-auto font-mono text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside ml-6 mb-6 space-y-2 text-text-secondary font-body"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside ml-6 mb-6 space-y-2 text-text-secondary font-body"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="pl-4 my-6 border-l-4 border-accent-coral italic text-text-secondary font-body"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: (props) => (
    <hr
      className="my-12 border-0 border-t border-border-subtle"
      {...props}
    />
  ),

  // Strong/Bold
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-text-primary" {...props}>
      {children}
    </strong>
  ),

  // Emphasis/Italic
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),

  // Images
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      className="rounded-lg my-6 max-w-full h-auto"
      {...props}
    />
  ),

  // Tables
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse text-sm font-body"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="border-b border-border-subtle" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-y divide-border-subtle" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr {...props}>{children}</tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-3 text-left font-semibold text-text-primary"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-text-secondary" {...props}>
      {children}
    </td>
  ),
};
