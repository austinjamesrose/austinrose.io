"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout";

type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    period: "Mar 2026 - Present",
    title: "People Technology Architect",
    company: "Airtable",
    location: "Remote",
    highlights: [
      "Builder-in-residence for People Technology — I don't adopt off-the-shelf tools, I build the data infrastructure and AI systems that People teams and AI agents build on",
      "Architected and shipped a governed People data warehouse on Databricks in a focused five-week build sprint, including a canonical registry of 99 certified workforce and recruiting metrics",
      "Engineered privacy and access governance in from day one: role-based access control, protected-category masking, column-level sensitivity classification, small-cell suppression, and OIDC deploys with no static credentials",
      "Designed the warehouse for agent-first consumption — a machine-readable discovery layer and daily findability harness that let AI agents answer People-team questions directly in seconds",
      "Stood up an AI governance program for the People org: intake registry, review desk, and a certification workflow for People-team AI tools",
      "Reimagined and launched the company-wide Impact@ performance program to production for all employees, and led the People-org arm of an internal AI enablement program",
      "Developed a multi-agent engineering method — orchestrating parallel AI coding agents behind adversarial review gates — to build and govern the platform at high velocity",
    ],
  },
  {
    period: "Jan 2023 - Mar 2026",
    title: "Head of People Analytics",
    company: "The Aspen Group",
    location: "Chicago, IL / Dallas, TX (Remote)",
    highlights: [
      "Partner with brand HR leaders and People CoE teams as a strategic advisor, translating workforce trends into talent investment recommendations",
      "Built workforce forecasting models projecting headcount demand—identified surgery capacity shortfall that led to accelerated Oral Surgeon hiring protecting Q1 2026 revenue",
      "Diagnosed pre-hire drop-off as key revenue risk; recommended dedicated Onboarding team resulting in 50 additional doctor starts YoY and $55M incremental revenue",
      "Architected enterprise reporting ecosystem: 950+ custom Workday reports, 500+ calculated fields, and 20+ dashboards",
      "Established Report Writing Committee to govern Workday conventions for 80+ analysts",
    ],
  },
  {
    period: "Feb 2021 - Jan 2023",
    title: "Senior Recruiter, Data Analytics",
    company: "Chime",
    location: "Chicago, IL",
    highlights: [
      "Scaled Data Analytics organization from 16 to 59 analysts across Marketing, Product, and Strategy—43 total hires",
      "Analyzed funnel conversion data to identify process gaps; introduced presentation round that increased offer-to-hire by 8%",
      "Developed SQL and Python technical assessments alongside hiring managers to evaluate candidate skills",
    ],
  },
  {
    period: "May 2020 - Feb 2021",
    title: "Senior Recruiter, Software Engineering",
    company: "Vineti",
    location: "San Francisco, CA",
    highlights: [
      "Full lifecycle recruiter for Software Engineering, DevOps, and Business Development",
      "Launched candidate experience survey—drove satisfaction from 71% to 86%",
      "Project managed Greenhouse ATS implementation, defining workflows and recruiter experience",
    ],
  },
  {
    period: "Sep 2019 - Apr 2020",
    title: "Recruiter, Software Engineering",
    company: "NextRoll",
    location: "San Francisco, CA",
    highlights: [
      "Full lifecycle recruiter for Engineering, Data Science, Analytics, and Business Intelligence",
      "Optimized contractor interview process—reduced source-to-hire by 14 days",
      "Built recruiting SLAs, headcount routing rules, and modeled projected headcount growth",
    ],
  },
  {
    period: "Sep 2018 - Sep 2019",
    title: "Global Recruiter, Tech & Product",
    company: "Delivery Hero SE",
    location: "Berlin, Germany",
    highlights: [
      "High-volume recruiter for international Product organization: Product Design, Product Management, Agile Coaches",
      "Partnered with IT on Workday Recruiting implementation, scoping business processes",
      "Led quarterly retrospectives for 50+ person Talent Acquisition team",
    ],
  },
  {
    period: "2016 - 2018",
    title: "Earlier Roles",
    company: "Highsnobiety, Pindrop, Hortonworks",
    location: "Berlin / Atlanta",
    highlights: [
      "Community Manager at Highsnobiety (Berlin)",
      "Business Development Representative at Pindrop and Hortonworks (Atlanta)",
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
              <p className="opacity-75 mb-3">{exp.company}</p>
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
              My career tells a story of natural analytical curiosity evolving
              into building. Starting in recruiting and business development
              roles, I was always the person asking &quot;what does the data
              say?&quot;—tracking conversion rates, analyzing reply rates to
              outreach, and looking for ways to optimize and automate processes.
            </p>
            <p>
              That curiosity led to increasingly data-focused recruiting roles
              at companies like Chime, where I scaled a Data Analytics team from
              16 to 59 analysts while using funnel data to improve hiring
              processes. At The Aspen Group I moved into dedicated People
              Analytics, leading workforce data strategy for a 23,000+ employee
              organization. Now at Airtable, I&apos;ve gone deeper still—building
              the governed data infrastructure and AI systems that People teams,
              and increasingly AI agents, rely on.
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
            <p className="opacity-50 text-sm">{education[0].location}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
