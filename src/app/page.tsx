import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { StatsSection, HeroSection } from "@/components/home";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Metrics Section */}
      <StatsSection />

      {/* Featured Work Preview */}
      <section className="py-32">
        <Container>
          <h2 className="font-display text-[2.5rem] leading-[1.2] text-text-primary text-center mb-16">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6 hover:border-accent-coral/30 hover:-translate-y-1 transition-all duration-300">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Executive Reporting
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-2">
                People Analytics Dashboard
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Enterprise Tableau dashboard tracking retention, headcount, and
                talent acquisition metrics across 20+ business units.
              </p>
              <p className="text-accent-coral text-sm">
                Impact: 40% reduction in report generation time
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6 hover:border-accent-coral/30 hover:-translate-y-1 transition-all duration-300">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Process Optimization
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-2">
                Onboarding Team Initiative
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Data-driven recommendation for dedicated Onboarding team that
                addressed doctor pre-hire process causing attrition.
              </p>
              <p className="text-accent-coral text-sm">
                Impact: $55M incremental revenue, 50+ doctors retained
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/work"
              className="text-accent-coral hover:text-accent-amber transition-colors inline-flex items-center gap-2"
            >
              View all projects
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-bg-secondary">
        <Container>
          <div className="max-w-[896px] mx-auto text-center">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.2] text-text-primary mb-8">
              About Me
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10">
              My career tells a story of analytical curiosity evolving into People Analytics leadership. Starting in recruiting, I was always the person asking &apos;what does the data say?&apos; That curiosity led me from scaling analytics teams at Chime to leading People Analytics for a 23,000+ employee organization.
            </p>
            <Link
              href="/about"
              className="text-accent-coral hover:text-accent-amber transition-colors inline-flex items-center gap-2"
            >
              Learn more about me
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <Container>
          <div className="max-w-[896px] mx-auto text-center">
            <h2 className="font-display text-[2.5rem] md:text-[3rem] leading-[1.2] text-text-primary mb-6">
              Let&apos;s connect.
            </h2>
            <p className="text-text-secondary text-lg md:text-xl mb-10">
              Looking to deepen expertise in advanced analytics and predictive modeling while continuing to influence critical talent decisions.
            </p>
            <Link
              href="/contact"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-[var(--transition-base)] inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
