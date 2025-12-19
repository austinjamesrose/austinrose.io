"use client";

import { Container } from "@/components/layout";
import { m, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks";
import { fadeUp, reducedMotionVariants } from "@/lib/animations/variants";

const experiences = [
  {
    period: "Jan 2023 - Present",
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

// Animation variants for timeline elements
const timelineDotVariants = {
  hidden: {
    scale: 0.8,
    backgroundColor: "transparent",
    borderColor: "var(--accent-coral)",
  },
  visible: {
    scale: 1,
    backgroundColor: "var(--accent-coral)",
    borderColor: "var(--accent-coral)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
};

const experienceCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
};

const highlightVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }),
};

// Individual experience item component
function ExperienceItem({
  exp,
  index
}: {
  exp: typeof experiences[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedMotionVariants : experienceCardVariants}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-12 md:pb-16 border-b border-border-subtle last:border-0"
    >
      {/* Timeline dot - animates from outline to filled */}
      <m.div
        variants={shouldReduceMotion ? reducedMotionVariants : timelineDotVariants}
        className="absolute -left-[calc(2rem+6px)] top-2 w-3 h-3 rounded-full border-2"
      />

      {/* Left column - metadata */}
      <div className="md:col-span-4 lg:col-span-3">
        <span className="inline-block px-3 py-1 bg-accent-coral/10 border border-accent-coral/30 rounded-full text-sm text-accent-coral">
          {exp.period}
        </span>
        <p className="text-text-tertiary text-sm md:text-base mt-3">
          {exp.location}
        </p>
      </div>

      {/* Right column - content */}
      <div className="md:col-span-8 lg:col-span-9">
        <h3 className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.3] text-text-primary">
          {exp.title}
        </h3>
        <p className="text-text-secondary text-base md:text-lg mt-1 mb-6">
          {exp.company}
        </p>
        <ul className="space-y-3">
          {exp.highlights.map((highlight, i) => (
            <m.li
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={shouldReduceMotion ? reducedMotionVariants : highlightVariants}
              className="text-text-secondary text-base md:text-lg leading-relaxed flex gap-3"
            >
              <span className="text-accent-coral mt-2">•</span>
              <span>{highlight}</span>
            </m.li>
          ))}
        </ul>
      </div>
    </m.div>
  );
}

// Timeline progress component
function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-coral to-accent-coral/10" />
    );
  }

  return (
    <div ref={ref} className="absolute left-0 top-0 bottom-0 w-0.5">
      {/* Background line */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-coral/20 to-accent-coral/5" />
      {/* Animated progress line */}
      <m.div
        style={{ height }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent-coral to-accent-coral/40"
      />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-6">
            Experience
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-[672px]">
            My journey from recruiting to People Analytics leadership.
          </p>
        </Container>
      </section>

      {/* Career Narrative */}
      <section className="pb-6 md:pb-8">
        <Container>
          <div className="max-w-[800px]">
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-6">
              My career tells a story of natural analytical curiosity evolving into People Analytics leadership. Starting in recruiting and business development roles, I was always the person asking &quot;what does the data say?&quot;—tracking conversion rates, analyzing reply rates to outreach, and looking for ways to optimize and automate processes.
            </p>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              That curiosity led to increasingly data-focused recruiting roles at companies like Chime, where I scaled a Data Analytics team from 16 to 59 analysts while simultaneously using funnel data to improve hiring processes. The transition to a dedicated People Analytics role at The Aspen Group was a natural next step—finally getting to focus entirely on the analytical work I&apos;d been drawn to all along.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="pb-24 md:pb-32">
        <Container>
          {/* Timeline wrapper with vertical line */}
          <div className="relative pl-8">
            {/* Animated timeline progress line */}
            <TimelineProgress />

            <div className="space-y-12 md:space-y-0">
              {experiences.map((exp, index) => (
                <ExperienceItem key={exp.period} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-12">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
            <div className="md:col-span-4 lg:col-span-3">
              <span className="text-accent-coral text-base md:text-lg font-medium">
                {education[0].year}
              </span>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.3] text-text-primary">
                {education[0].degree} in {education[0].field}
              </h3>
              <p className="text-text-secondary text-base md:text-lg mt-1">
                {education[0].school}
              </p>
              <p className="text-text-tertiary text-sm md:text-base mt-1">
                {education[0].location}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
