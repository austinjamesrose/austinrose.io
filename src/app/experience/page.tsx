import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Austin Rose's career timeline from recruiting to People Analytics leadership.",
};

const experiences = [
  {
    period: "2023 - Present",
    title: "Head of People Analytics",
    company: "The Aspen Group",
    location: "Chicago, IL",
    highlights: [
      "Lead People Analytics function supporting 23,000+ employees across multiple brands",
      "Built 950+ custom Workday reports and 20+ executive dashboards",
      "Delivered $55M incremental revenue through data-driven onboarding initiative",
      "Established Report Writing Committee to standardize practices for 80+ analysts",
    ],
  },
  {
    period: "2021 - 2023",
    title: "Senior Recruiter",
    company: "Chime",
    location: "San Francisco, CA",
    highlights: [
      "Led full-cycle recruiting for engineering and product roles",
      "Developed data-driven sourcing strategies improving pipeline quality",
      "Created recruiting analytics dashboards for leadership visibility",
      "Mentored junior recruiters on data analysis and reporting",
    ],
  },
  {
    period: "2019 - 2021",
    title: "Technical Recruiter",
    company: "Various Companies",
    location: "San Francisco Bay Area",
    highlights: [
      "Specialized in engineering and data science recruiting",
      "Built custom tracking systems for candidate pipeline management",
      "Introduced analytics practices to recruiting operations",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science",
    field: "Business Administration",
    school: "University of Example",
    year: "2018",
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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
