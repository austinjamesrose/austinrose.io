import Link from "next/link";
import { Container } from "@/components/layout";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[radial-gradient(ellipse_at_center_top,rgba(232,124,92,0.08)_0%,transparent_50%)]">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            {/* Decorative icon */}
            <div className="text-accent-coral text-3xl mb-8 animate-pulse-slow">&#10022;</div>

            {/* Name */}
            <h1 className="font-display text-[4.5rem] md:text-[5.5rem] leading-[1.05] text-text-primary mb-6">
              Austin Rose
            </h1>

            {/* Title */}
            <p className="text-text-secondary text-xl md:text-2xl mb-8">
              Head of People Analytics
            </p>

            {/* Value prop */}
            <p className="text-text-secondary mb-10 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
              People Analytics leader who partners with HR and business leaders to turn workforce data into strategic action. Proven track record building analytics infrastructure, delivering executive-level insights, and driving measurable business outcomes.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 justify-center">
              <Link
                href="/work"
                className="bg-accent-coral text-white px-6 py-3 rounded-lg font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-coral/30 transition-all duration-200"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-text-tertiary text-text-primary px-6 py-3 rounded-lg font-medium hover:border-accent-coral hover:text-accent-coral hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-coral/30 transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-bg-secondary border-t border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center max-w-5xl mx-auto">
            <div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-24 md:after:w-px md:after:bg-white/10 md:last:after:hidden">
              <p className="font-display text-[3.5rem] md:text-[5rem] leading-[1.1] text-accent-coral">
                $55M
              </p>
              <p className="text-text-secondary text-sm md:text-base mt-3">
                incremental revenue delivered
              </p>
            </div>
            <div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-24 md:after:w-px md:after:bg-white/10 md:last:after:hidden">
              <p className="font-display text-[3.5rem] md:text-[5rem] leading-[1.1] text-text-primary">
                23K+
              </p>
              <p className="text-text-secondary text-sm md:text-base mt-3">
                employees supported
              </p>
            </div>
            <div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-24 md:after:w-px md:after:bg-white/10 md:last:after:hidden">
              <p className="font-display text-[3.5rem] md:text-[5rem] leading-[1.1] text-text-primary">
                950+
              </p>
              <p className="text-text-secondary text-sm md:text-base mt-3">
                custom Workday reports built
              </p>
            </div>
          </div>
        </Container>
      </section>

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
          <div className="max-w-3xl mx-auto text-center">
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
          <div className="max-w-3xl mx-auto text-center">
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
