"use client";

import { useState } from "react";
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

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  impact?: string;
  tags?: string[];
  externalUrl?: string;
};

const projects: Project[] = [
  {
    id: "universal-wait-times",
    category: "Personal Project",
    title: "Universal Orlando Wait Time Tracker",
    description:
      "Real-time data pipeline collecting wait times every 30 minutes via GitHub Actions. Explore patterns by hour, day, and ride across Islands of Adventure, Universal Studios, and Epic Universe.",
    tags: ["Python", "Streamlit", "SQLite", "GitHub Actions"],
    externalUrl: "https://austin-rose-wait-time-project.streamlit.app/",
  },
  {
    id: "onboarding-initiative",
    category: "Process Optimization",
    title: "Onboarding Team Initiative",
    description:
      "Diagnosed pre-hire drop-off as a key revenue risk by analyzing attrition data. Asked 'why are we losing doctors before they even start?' and traced the problem to a 6+ month credentialing process with no dedicated support.",
    impact: "$55M incremental revenue, 50+ doctors retained",
  },
  {
    id: "workforce-forecasting",
    category: "Predictive Analytics",
    title: "Workforce Forecasting Model",
    description:
      "Built models projecting headcount demand, requisition volume, and specialist labor availability. Identified a projected surgery capacity shortfall that led leadership to accelerate Oral Surgeon hiring.",
    impact: "Protected Q1 2026 revenue targets",
  },
  {
    id: "executive-dashboard",
    category: "Executive Reporting",
    title: "People & TA Executive Dashboard",
    description:
      "Enterprise Tableau dashboard tracking retention, headcount, and talent acquisition metrics across 20+ business units.",
    impact: "Brand-level performance monitoring enabled",
  },
  {
    id: "workday-reporting",
    category: "Data Infrastructure",
    title: "Workday Reporting Ecosystem",
    description:
      "Built the data infrastructure foundation from scratch—creating standardized reporting conventions, calculated fields, and dashboards that give visibility across all business units.",
    impact: "Standardized reporting for 80+ analysts",
  },
  {
    id: "chatgpt-rollout",
    category: "Tools & Automation",
    title: "ChatGPT Enterprise Rollout",
    description:
      "Led implementation of custom GPTs for policies, data access, and onboarding streamlining.",
    impact: "Streamlined access to organizational knowledge",
  },
  {
    id: "report-committee",
    category: "Data Governance",
    title: "Report Writing Committee",
    description:
      "Established governance committee to standardize Workday report conventions and best practices.",
    impact: "Improved accuracy and findability for 80+ analysts",
  },
  {
    id: "recruiting-funnel",
    category: "Process Optimization",
    title: "Recruiting Funnel Optimization",
    description:
      "Analyzed funnel conversion data at each interview stage to identify process gaps. Introduced new presentation round based on data insights.",
    impact: "8% improvement in offer-to-hire conversion",
  },
];

// Get unique categories from projects
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function CategoryFilter({
  selected,
  onSelect,
}: {
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
  const isExternal = !!project.externalUrl;
  const patternType = categoryToPattern[project.category] || "bars";

  return (
    <div className="card group overflow-hidden relative">
      {/* DataVizPattern header for all projects */}
      <div className="mb-4 -mx-5 -mt-5 text-foreground">
        <DataVizPattern pattern={patternType} animate={true} />
      </div>

      <div className="relative z-10">
        <span className="text-xs opacity-75 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="font-display text-xl mt-2 mb-2">
          {isExternal ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {project.title}
              <svg
                className="inline-block w-4 h-4 ml-2 opacity-50 group-hover:opacity-100"
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
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm opacity-90 mb-3 leading-relaxed">
          {project.description}
        </p>
        {project.impact && (
          <p className="text-sm text-accent">
            Impact: {project.impact}
          </p>
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
  );
}

export function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
