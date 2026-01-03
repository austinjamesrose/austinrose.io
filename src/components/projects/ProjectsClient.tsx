"use client";

import { useState } from "react";
import Link from "next/link";
import { DataVizPattern, type PatternType } from "@/components/data-viz";

// Map categories to pattern types
const categoryToPattern: Record<string, PatternType> = {
  "Process Optimization": "flow",
  "Predictive Analytics": "scatter",
  "Executive Reporting": "bars",
  "Data Infrastructure": "nodes",
  "Data Governance": "grid",
  "Tools & Automation": "network",
  "Personal Project": "network",
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  impact?: string;
  tags?: string[];
  externalUrl?: string;
  pattern?: string;
};

// Get unique categories from projects array
function getCategories(projects: Project[]): string[] {
  return ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
}

function CategoryFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const isActive = selected === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 no-underline ${
              isActive
                ? "bg-accent text-white"
                : "border border-border hover:border-accent hover:text-accent"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const patternType = (project.pattern || categoryToPattern[project.category] || "bars") as PatternType;

  return (
    <Link href={`/projects/${project.slug}`} className="block no-underline">
      <div className="card group overflow-hidden relative">
        {/* DataVizPattern header for all projects */}
        <div className="mb-4 -mx-5 -mt-5 text-foreground">
          <DataVizPattern pattern={patternType} animate={true} />
        </div>

        <div className="relative z-10">
          <span className="text-xs opacity-75 uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="font-display text-xl mt-2 mb-2 group-hover:text-accent transition-colors decoration-accent decoration-wavy underline-offset-4 group-hover:underline">
            {project.title}
          </h3>
          <p className="text-sm opacity-90 mb-3 leading-relaxed">
            {project.description}
          </p>
          {project.impact && (
            <p className="text-sm text-accent">Impact: {project.impact}</p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="tag text-accent border-accent">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories(projects);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <h1 className="text-3xl mb-4">Projects</h1>
      <p className="opacity-75 mb-6">
        A collection of work spanning People Analytics, data infrastructure,
        and personal experiments. From enterprise dashboards to weekend data
        projects.
      </p>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center opacity-60 py-12">
          No projects found in this category.
        </p>
      )}
    </>
  );
}
