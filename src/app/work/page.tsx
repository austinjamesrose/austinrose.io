import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Austin Rose's portfolio of People Analytics projects and data visualization work.",
};

const projects = [
  {
    id: "onboarding-initiative",
    category: "Process Optimization",
    title: "Onboarding Team Initiative",
    description:
      "Data-driven recommendation for dedicated Onboarding team that addressed doctor pre-hire process causing attrition.",
    impact: "$55M incremental revenue, 50+ doctors retained",
  },
  {
    id: "workday-reporting",
    category: "Data Infrastructure",
    title: "Workday Reporting Ecosystem",
    description:
      "Built comprehensive reporting infrastructure with 950+ custom reports, 500 calculated fields, and 20+ dashboards.",
    impact: "Standardized reporting for 80+ analysts",
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
];

const categories = [
  "All",
  "Executive Reporting",
  "Data Infrastructure",
  "Process Optimization",
  "Tools & Automation",
  "Data Governance",
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-[2.5rem] leading-[1.2] text-text-primary mb-6">
              My Work
            </h1>
            <p className="text-text-secondary text-lg">
              A selection of projects showcasing my work in People Analytics,
              data visualization, and process optimization.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="pb-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-[var(--transition-base)]
                  ${
                    category === "All"
                      ? "bg-accent-coral text-white"
                      : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group bg-gradient-to-br from-[#1e1e1e]/80 to-[#141414]/90 border border-white/[0.08] rounded-2xl p-6 hover:border-accent-coral/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
              >
                {/* Placeholder for visualization preview */}
                <div className="aspect-video bg-bg-tertiary rounded-lg mb-6 flex items-center justify-center gap-2 p-8">
                  {/* Abstract data visualization pattern */}
                  <div className="flex items-end gap-1.5 h-20">
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '45%' }}></div>
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '75%' }}></div>
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '55%' }}></div>
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '90%' }}></div>
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '65%' }}></div>
                    <div className="w-8 bg-white/10 rounded-sm" style={{ height: '80%' }}></div>
                  </div>
                </div>

                <span className="text-accent-teal text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-2 group-hover:text-accent-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-accent-coral text-sm">
                  Impact: {project.impact}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
