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
              className="rounded-lg object-cover flex-shrink-0 self-start mx-auto sm:mx-0 w-[220px] h-[280px]"
              priority
            />
            <div className="space-y-4">
              <p className="opacity-90 leading-relaxed">
                I&apos;m a People Technology Architect. I design and build what People teams run on day to day: the warehouse under their reporting, the HRIS and recruiting systems, the pipelines between them, and the AI agents that sit on top.
              </p>
              <p className="opacity-90 leading-relaxed">
                I got here the long way. I started in technical recruiting, where I was always the person asking &quot;what does the data say?&quot; That pulled me toward the data itself. At Chime I scaled a Data Analytics team from 16 to 59 analysts, and from there I moved into People Analytics leadership at The Aspen Group.
              </p>
            </div>
          </div>

          <p className="opacity-90 leading-relaxed mb-8">
            Now I&apos;m at Airtable, doing the building myself. I ship audit-ready data infrastructure quickly, and I like being the person other people, and increasingly other agents, depend on. People Analytics taught me to care about business impact and to stay close to the teams I support. I brought both with me and added the platform underneath.
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
                I build alongside the people who use what I ship. The metric definitions in the warehouse came out of working sessions with HR and business leaders, which is why the numbers match how they talk about the business. Years of sitting in those rooms is how I learned what to build.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg mb-2">Curiosity-Driven</h3>
              <p className="opacity-90 leading-relaxed">
                I dig into business problems that look messy. The best recommendations I have made rarely started as a request; they came from poking at the data until something looked off.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg mb-2">Hands-On Builder</h3>
              <p className="opacity-90 leading-relaxed">
                I&apos;m hands-on every day, in the repo and in the data. I model warehouse tables, build in governance and privacy controls, and orchestrate AI coding agents to get production systems out the door.
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
