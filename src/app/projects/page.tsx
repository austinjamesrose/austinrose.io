import { Metadata } from "next";
import { Container } from "@/components/layout";
import { ProjectsClient } from "@/components/projects";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Austin Rose's portfolio of People Analytics projects, data visualization work, and personal experiments.",
};

export default function ProjectsPage() {
  const projectMetas = getAllProjects();

  // Transform ProjectMeta to the shape ProjectsClient expects
  const projects = projectMetas.map((p) => ({
    slug: p.slug,
    category: p.frontmatter.category,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    tags: p.frontmatter.tags,
    impact: p.frontmatter.impact,
    externalUrl: p.frontmatter.externalUrl,
    pattern: p.frontmatter.pattern,
  }));

  return (
    <section className="py-12">
      <Container>
        <ProjectsClient projects={projects} />
      </Container>
    </section>
  );
}
