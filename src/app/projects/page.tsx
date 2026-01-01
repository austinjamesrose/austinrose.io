import { Metadata } from "next";
import { Container } from "@/components/layout";
import { ProjectsClient } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Austin Rose's portfolio of People Analytics projects, data visualization work, and personal experiments.",
};

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <Container>
        <ProjectsClient />
      </Container>
    </section>
  );
}
