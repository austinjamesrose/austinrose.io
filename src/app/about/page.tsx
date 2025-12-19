import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout";
import { SkillsRadar } from "@/components/animations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Austin Rose's journey from recruiting to People Analytics leadership.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-12">
            About Me
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Headshot */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <Image
                src="/images/headshot.jpg"
                alt="Austin Rose"
                width={280}
                height={280}
                className="rounded-full border-4 border-bg-tertiary shadow-xl"
                priority
              />
            </div>

            {/* Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                My career tells a story of natural analytical curiosity evolving into People Analytics leadership. Starting in recruiting and business development roles, I was always the person asking &apos;what does the data say?&apos;—tracking conversion rates, analyzing reply rates to outreach, and looking for ways to optimize processes.
              </p>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                That curiosity led to increasingly data-focused recruiting roles at companies like Chime, where I scaled a Data Analytics team from 16 to 59 analysts while using funnel data to improve hiring processes. The transition to a dedicated People Analytics role at The Aspen Group was a natural next step—finally getting to focus entirely on the analytical work I&apos;d been drawn to all along.
              </p>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                Now, with three years leading People Analytics for a 23,000+ employee organization, I&apos;m ready to go deeper technically. I&apos;m not looking to abandon the strategic partnership and business impact—I want to pair it with more sophisticated analytical methods and stronger technical fundamentals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-16">
            Skills & Tools
          </h2>

          {/* Skills Radar - Visual Summary */}
          <div className="flex justify-center mb-16">
            <SkillsRadar
              size={340}
              skills={[
                { name: "Workday", level: 95, color: "var(--accent-primary)" },
                { name: "SQL", level: 85, color: "var(--accent-primary)" },
                { name: "Tableau", level: 80, color: "var(--accent-primary)" },
                { name: "Python", level: 65, color: "var(--accent-tertiary)" },
                { name: "BigQuery", level: 70, color: "var(--accent-tertiary)" },
                { name: "Excel", level: 90, color: "var(--accent-primary)" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Data & Analytics */}
            <div className="bg-bg-secondary rounded-2xl p-8 border-l-4 border-l-accent-coral">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Data & Analytics
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Workday (deep expertise)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  SQL (CTEs, window functions, complex joins)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Python (pandas, matplotlib)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Tableau
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  BigQuery
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Excel / Google Sheets
                </li>
              </ul>
            </div>

            {/* Strategy */}
            <div className="bg-bg-secondary rounded-2xl p-8 border-l-4 border-l-accent-teal">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Strategy
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Executive Reporting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Workforce Planning & Forecasting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Talent Acquisition Analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Data Governance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Process Optimization
                </li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-bg-secondary rounded-2xl p-8 border-l-4 border-l-accent-purple">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Leadership & Tools
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Team Management
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Stakeholder Communication
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  ChatGPT Enterprise (custom GPTs)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  ClickUp
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  Greenhouse (ATS)
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <Container>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-16">
            What Makes Me Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Strategic Partnership
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                I don&apos;t just deliver reports - I embed myself with stakeholders to understand their real problems. Through ongoing conversations with HR and business leaders, I&apos;ve become a trusted advisor, not just a data provider.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Curiosity-Driven
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                I dig into challenging business problems. The most impactful recommendations don&apos;t often come from requests, they come from naturally exploring critical data and connecting the dots.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Hands-On Builder
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Leading analytics for a 23K+ employee organization with a lean team, I&apos;m hands-on each and every day. There&apos;s no room for pure strategy - I&apos;m in the data, writing queries, building dashboards, and iterating on forecasts.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
