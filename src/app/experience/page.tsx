"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout";

type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  note?: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    period: "Mar 2026 - Present",
    title: "People Technology Architect",
    company: "Airtable",
    location: "Dallas, TX (Remote)",
    note: "Promoted from Senior Business Systems Engineer, August 2026",
    highlights: [
      "Architected the company's People Data Warehouse on Databricks and shipped the first production release in five weeks: certified workforce and recruiting models, 99 canonical metrics, and a discovery layer built for analysts and AI agents.",
      "Made it agent-first in production: the People team asks an AI agent a workforce question and gets a certified answer in seconds, with governed shares to other functions and more data domains onboarding.",
      "Built privacy and security in from day one: row-level access (RBAC), automated masking of protected-category and PII fields, column-level sensitivity classification, and credential-free deploy pipelines (OIDC).",
      "Ran the build as the sole engineer, orchestrating parallel AI coding agents behind mandatory adversarial review gates, which compressed a multi-engineer, multi-quarter scope into one.",
      "Led the redesign of the company's quarterly check-in into an agent-driven reflection tool, launched company-wide for the August '26 cycle.",
      "Stood up the People org's AI governance program (intake registry, review desk, certification workflow) and ran AI enablement across the org through office hours, build jams, and workshops.",
    ],
  },
  {
    period: "Jan 2023 - Mar 2026",
    title: "Director, People Analytics & AI",
    company: "The Aspen Group",
    location: "Chicago, IL / Dallas, TX (Remote)",
    note: "Promoted twice: Manager, Talent Acquisition Analytics to Senior Manager, People Analytics to Director, People Analytics & AI",
    highlights: [
      "Built and led the People Analytics function for a 23,000+ employee, multi-brand healthcare enterprise: managed a senior analyst, advising brand HR leaders and People CoE teams on talent investment decisions.",
      "Implemented Dash Enterprise for People Analytics reporting, orchestrating a team of parallel coding agents for dashboard buildouts, data pipelining, and requirements gathering.",
      "Built workforce forecasting models that surfaced a surgery-capacity shortfall early, pulling Oral Surgeon hiring forward ahead of Q1 2026 demand.",
      "Diagnosed pre-hire drop-off as a key revenue risk; the resulting dedicated Onboarding team drove 50 additional doctor starts year over year, worth $55M in Finance-modeled incremental revenue.",
      "Governed the enterprise Workday reporting estate (950+ custom reports, 500+ calculated fields, 20+ dashboards) and chaired the Report Writing Committee setting conventions for 80+ analysts.",
    ],
  },
  {
    period: "Feb 2021 - Jan 2023",
    title: "Senior Recruiter, Data Analytics",
    company: "Chime",
    location: "Chicago, IL",
    highlights: [
      "Scaled the Data Analytics organization from 16 to 59 analysts (43 hires) across Marketing, Product, and Strategy.",
      "Instrumented funnel-conversion analytics that closed process gaps; a new presentation round lifted offer-to-hire by 8%.",
      "Co-developed SQL and Python technical assessments with hiring managers.",
    ],
  },
  {
    period: "May 2020 - Feb 2021",
    title: "Senior Recruiter, Software Engineering",
    company: "Vineti",
    location: "San Francisco, CA",
    highlights: [
      "Led the end-to-end Greenhouse ATS implementation: requirements gathering, workflow configuration, and recruiter rollout.",
      "Launched a candidate experience survey that raised satisfaction from 71% to 86%.",
    ],
  },
  {
    period: "Sep 2019 - Apr 2020",
    title: "Recruiter, Software Engineering",
    company: "NextRoll",
    location: "San Francisco, CA",
    highlights: [
      "Cut source-to-hire by 14 days through interview-process redesign; built recruiting SLAs and headcount growth models.",
    ],
  },
  {
    period: "Sep 2018 - Sep 2019",
    title: "Global Recruiter, Tech & Product",
    company: "Delivery Hero SE",
    location: "Berlin, Germany",
    highlights: [
      "Partnered with IT on the global Workday Recruiting implementation, scoping business processes for the Product organization.",
    ],
  },
  {
    period: "2016 - 2018",
    title: "Earlier Roles",
    company: "Pindrop, Hortonworks, Highsnobiety",
    location: "Atlanta / Berlin",
    highlights: [
      "Business development at Pindrop and Hortonworks (Atlanta).",
      "Community Manager at Highsnobiety (Berlin).",
    ],
  },
];

const education = [
  {
    degree: "BBA",
    field: "Sports Business Management",
    school: "Mercer University",
    location: "Macon, GA",
    year: "2016",
  },
];

function TimelineSection({ experiences }: { experiences: Experience[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {experiences.map((exp, index) => {
        const isCurrent = index === 0;
        const isLast = index === experiences.length - 1;

        return (
          <div key={exp.period} className="relative pl-8 pb-8 last:pb-0">
            {/* Vertical line connecting nodes */}
            {!isLast && (
              <motion.div
                className="absolute left-[5px] top-[14px] bottom-0 w-px bg-foreground"
                style={{ opacity: 0.15 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />
            )}

            {/* Node */}
            <motion.div
              className={`absolute left-0 top-1 rounded-full ${
                isCurrent ? "bg-accent" : "bg-foreground"
              }`}
              style={{
                width: isCurrent ? 12 : 10,
                height: isCurrent ? 12 : 10,
                opacity: isCurrent ? 1 : 0.3,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "backOut",
              }}
            >
              {/* Pulse ring for current role */}
              {isCurrent && !prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.1,
              }}
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <span className="text-accent text-sm">{exp.period}</span>
                <span className="opacity-50 text-sm">·</span>
                <span className="opacity-75 text-sm">{exp.location}</span>
              </div>
              <h3 className="font-display text-xl">{exp.title}</h3>
              <p className={`opacity-75 ${exp.note ? "mb-1" : "mb-3"}`}>{exp.company}</p>
              {exp.note && (
                <p className="text-sm italic opacity-70 mb-3">{exp.note}</p>
              )}
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 opacity-90 text-sm leading-relaxed">
                    <span className="text-accent">-</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl mb-4">Experience</h1>
          <p className="opacity-75 mb-8">
            My path from recruiting to People Technology and AI.
          </p>

          <div className="mb-8 opacity-90 leading-relaxed">
            <p className="mb-4">
              A decade from technical recruiting, through People Analytics
              leadership, to hands-on platform engineering. The throughline is
              that I was always the person asking &quot;what does the data
              say?&quot; I started in recruiting and business development,
              tracking conversion rates and outreach reply rates and looking for
              anything I could optimize or automate.
            </p>
            <p>
              That pulled me toward data. At Chime I scaled a Data Analytics team
              from 16 to 59 analysts. From there I moved into People Analytics
              leadership at The Aspen Group, running the function for a 23,000+
              employee healthcare enterprise. Now at Airtable I build the platform
              and the AI systems on top of it: the warehouse, the HR systems around
              it, and the agents the People team works with every day.
            </p>
          </div>
        </Container>
      </section>

      <hr />

      {/* Timeline */}
      <section className="py-12">
        <Container>
          <TimelineSection experiences={experiences} />
        </Container>
      </section>

      <hr />

      {/* Education */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">Education</h2>
          <div className="relative pl-8">
            {/* Node */}
            <div
              className="absolute left-0 top-1 w-[10px] h-[10px] rounded-full bg-foreground"
              style={{ opacity: 0.3 }}
            />
            <span className="text-accent text-sm">{education[0].year}</span>
            <h3 className="font-display text-xl mt-1">
              {education[0].degree} in {education[0].field}
            </h3>
            <p className="opacity-75">{education[0].school}</p>
            <p className="opacity-70 text-sm">{education[0].location}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
