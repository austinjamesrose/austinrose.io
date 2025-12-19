import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Austin Rose's career timeline from recruiting to People Analytics leadership.",
};

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

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-6">
            Experience
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
            My journey from recruiting to People Analytics leadership.
          </p>
        </Container>
      </section>

      {/* Timeline */}
      <section className="pb-24 md:pb-32">
        <Container>
          {/* Timeline wrapper with vertical line */}
          <div className="relative pl-8">
            {/* Vertical gradient line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-coral to-accent-coral/10" />

            <div className="space-y-12 md:space-y-0">
              {experiences.map((exp, index) => (
                <div
                  key={exp.period}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-12 md:pb-16 border-b border-border-subtle last:border-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(2rem+6px)] top-2 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent-coral" />

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
                        <li
                          key={i}
                          className="text-text-secondary text-base md:text-lg leading-relaxed flex gap-3"
                        >
                          <span className="text-accent-coral mt-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
