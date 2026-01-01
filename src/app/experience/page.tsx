import { Container } from "@/components/layout";

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
      <section className="py-12">
        <Container>
          <h1 className="text-3xl mb-4">Experience</h1>
          <p className="opacity-75 mb-8">
            My journey from recruiting to People Analytics leadership.
          </p>

          <div className="mb-8 opacity-90 leading-relaxed">
            <p className="mb-4">
              My career tells a story of natural analytical curiosity evolving
              into People Analytics leadership. Starting in recruiting and
              business development roles, I was always the person asking
              &quot;what does the data say?&quot;—tracking conversion rates,
              analyzing reply rates to outreach, and looking for ways to
              optimize and automate processes.
            </p>
            <p>
              That curiosity led to increasingly data-focused recruiting roles
              at companies like Chime, where I scaled a Data Analytics team from
              16 to 59 analysts while simultaneously using funnel data to
              improve hiring processes. The transition to a dedicated People
              Analytics role at The Aspen Group was a natural next step—finally
              getting to focus entirely on the analytical work I&apos;d been
              drawn to all along.
            </p>
          </div>
        </Container>
      </section>

      <hr />

      {/* Timeline */}
      <section className="py-12">
        <Container>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.period} className="border-l-2 border-accent pl-6">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr />

      {/* Education */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">Education</h2>
          <div className="border-l-2 border-accent pl-6">
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
