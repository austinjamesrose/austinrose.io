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
    "SQL",
    "Python",
    "Data pipelines & integrations",
    "CI/CD",
    "AI agent orchestration (Claude Code, Codex, Hyperagent)",
  ],
  platforms: [
    "Workday HCM (reporting, calculated fields, Recruiting)",
    "Databricks (Unity Catalog, Lakeflow)",
    "Greenhouse",
    "Airtable & Hyperagent",
    "Tableau · BigQuery · Google Cloud",
  ],
  focus: [
    "Data Infrastructure",
    "AI Enablement & Governance",
    "HR Data Privacy & Governance",
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
                I&apos;m a People Technology architect. I design and build the systems People teams run on: governed HR data warehouses, HRIS and recruiting platforms, data pipelines, and production AI agents.
              </p>
              <p className="opacity-90 leading-relaxed">
                I got here the long way. I started in technical recruiting, where I was always the person asking &apos;what does the data say?&apos; That pulled me toward the data itself. At Chime I scaled a Data Analytics team from 16 to 59 analysts, and from there I moved into People Analytics leadership at The Aspen Group.
              </p>
            </div>
          </div>

          <p className="opacity-90 leading-relaxed mb-8">
            Now I&apos;m at Airtable, doing the building hands-on. I ship audit-ready data infrastructure at startup speed, and I like being the person who builds the systems other people, and increasingly other agents, rely on. I still care about the business impact and the partnership that People Analytics taught me. The difference now is that I build the platform, not just the report.
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
              <h3 className="font-display text-lg mb-3">Engineering & AI</h3>
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
              <h3 className="font-display text-lg mb-3">HRIS & Platforms</h3>
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
                I&apos;m hands-on every day, in the repo and in the data. I model warehouse tables, build in governance and privacy controls, and orchestrate AI coding agents to ship production systems at startup speed.
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
