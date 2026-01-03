import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { MDXComponents } from "@/components/blog";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { compileMDX } from "next-mdx-remote/rsc";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Compile MDX content
  const { content } = await compileMDX({
    source: project.content,
    components: MDXComponents,
  });

  return (
    <article className="py-24 md:py-32">
      <Container>
        {/* Back navigation */}
        <Link
          href="/projects"
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
          <span className="font-body">Back to Projects</span>
        </Link>

        {/* Project header */}
        <header className="mb-12">
          <span className="text-xs opacity-75 uppercase tracking-wider">
            {project.frontmatter.category}
          </span>
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-text-primary mt-2 mb-6">
            {project.frontmatter.title}
          </h1>

          {/* Description */}
          <p className="text-lg opacity-80 mb-6 max-w-2xl">
            {project.frontmatter.description}
          </p>

          {/* Tags and External Link */}
          <div className="flex flex-wrap items-center gap-4">
            {project.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-body bg-bg-tertiary text-text-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {project.frontmatter.externalUrl && (
              <a
                href={project.frontmatter.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </header>

        {/* Project content */}
        <div className="max-w-3xl">{content}</div>

        {/* Footer navigation */}
        <footer className="mt-16 pt-8 border-t border-border-subtle">
          <Link
            href="/projects"
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
            <span className="font-body font-medium">Back to all projects</span>
          </Link>
        </footer>
      </Container>
    </article>
  );
}
