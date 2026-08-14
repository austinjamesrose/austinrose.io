import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Austin Rose's path from recruiting to People Analytics to building People Technology and AI infrastructure at Airtable.",
};

const skills = {
  technical: [
    "SQL (CTEs, window functions, complex joins)",
    "Python (pandas, matplotlib)",
    "Databricks / warehouse data modeling",
    "Multi-agent orchestration (Claude Code)",
    "Tableau & BigQuery",
  ],
  platforms: [
    "Workday (deep expertise)",
    "Databricks",
    "Greenhouse ATS",
    "Claude & AI agents",
    "GitHub / CI-CD",
  ],
  focus: [
    "Data Infrastructure",
    "AI Enablement & Governance",
    "Data Governance & Privacy (RBAC, masking, PII classification)",
    "Workforce Planning & Forecasting",
    "Executive Reporting",
  ],
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl mb-6">About Me</h1>

          <div className="flex flex-col sm:flex-row gap-8 mb-8">
            <Image
              src="/images/headshot-about.jpg"
              alt="Austin Rose"
              width={220}
              height={280}
              className="rounded-lg object-cover flex-shrink-0 mx-auto sm:mx-0"
              priority
            />
            <div className="space-y-4">
              <p className="opacity-90 leading-relaxed">
                My career tells a story of natural analytical curiosity evolving into building. Starting in recruiting and business development roles, I was always the person asking &apos;what does the data say?&apos;—tracking conversion rates, analyzing reply rates to outreach, and looking for ways to optimize processes.
              </p>
              <p className="opacity-90 leading-relaxed">
                That curiosity led to increasingly data-focused recruiting roles at companies like Chime, where I scaled a Data Analytics team from 16 to 59 analysts, and then to leading People Analytics for a 23,000+ employee organization at The Aspen Group.
              </p>
            </div>
          </div>

          <p className="opacity-90 leading-relaxed mb-8">
            Now at Airtable, I&apos;ve gone deeper technically as a People Technology architect. I build the governed data infrastructure and AI systems that People teams—and increasingly, AI agents—rely on to make talent decisions. I don&apos;t adopt off-the-shelf tools; I build the infrastructure other people and other agents build on, and I pair that engineering with the strategic partnership and business impact I&apos;ve always cared about.
          </p>
        </Container>
      </section>

      <hr />

      {/* Skills & Tools */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">Skills & Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg mb-3">Technical</h3>
              <ul className="space-y-1 opacity-90">
                {skills.technical.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="text-accent">-</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-3">Platforms</h3>
              <ul className="space-y-1 opacity-90">
                {skills.platforms.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="text-accent">-</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-3">Focus Areas</h3>
              <ul className="space-y-1 opacity-90">
                {skills.focus.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="text-accent">-</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <hr />

      {/* What Makes Me Different */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">What Makes Me Different</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg mb-2">Strategic Partnership</h3>
              <p className="opacity-90 leading-relaxed">
                I don&apos;t just deliver reports - I embed myself with stakeholders to understand their real problems. Through ongoing conversations with HR and business leaders, I&apos;ve become a trusted advisor, not just a data provider.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg mb-2">Curiosity-Driven</h3>
              <p className="opacity-90 leading-relaxed">
                I dig into challenging business problems. The most impactful recommendations don&apos;t often come from requests, they come from naturally exploring critical data and connecting the dots.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg mb-2">Hands-On Builder</h3>
              <p className="opacity-90 leading-relaxed">
                I&apos;m hands-on each and every day - in the repo and in the data, modeling warehouse tables, wiring up governance, and orchestrating AI agents to ship. I build the infrastructure other people and other agents build on, not slideware about it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr />

      {/* Contact */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-4">Get in Touch</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="mailto:austin@austinrose.io"
              className="hover:text-accent"
            >
              austin@austinrose.io
            </Link>
            <span className="opacity-50">|</span>
            <Link
              href="https://linkedin.com/in/roseaustin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </Link>
            <span className="opacity-50">|</span>
            <Link
              href="https://github.com/austinjamesrose"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
