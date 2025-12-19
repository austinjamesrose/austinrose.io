import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Interactive data visualizations and code samples showcasing Austin Rose's technical skills.",
};

export default function PlaygroundPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <Container>
          <div className="max-w-[768px] mx-auto text-center">
            <h1 className="font-display text-[2.5rem] leading-[1.2] text-text-primary mb-6">
              Data Playground
            </h1>
            <p className="text-text-secondary text-lg">
              Interactive visualizations and code samples demonstrating People
              Analytics concepts.
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tableau Embed Placeholder */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-4">
                Interactive Dashboards
              </h3>
              <div className="aspect-video bg-bg-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-tertiary text-sm">
                  Tableau Public embeds coming soon
                </p>
              </div>
              <p className="text-text-secondary text-sm mt-4">
                Explore sample HR metrics dashboards with anonymized data
                showcasing retention, headcount, and talent acquisition trends.
              </p>
            </div>

            {/* Code Samples Placeholder */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-4">
                SQL & Python Samples
              </h3>
              <div className="aspect-video bg-bg-tertiary rounded-lg flex items-center justify-center font-mono text-sm">
                <pre className="text-text-tertiary">
                  {`SELECT department,
       COUNT(*) as headcount,
       AVG(tenure_months) as avg_tenure
FROM employees
GROUP BY department
ORDER BY headcount DESC;`}
                </pre>
              </div>
              <p className="text-text-secondary text-sm mt-4">
                Real-world SQL queries and Python pandas snippets for HR data
                analysis with explanations.
              </p>
            </div>

            {/* Chart.js Demo Placeholder */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-4">
                Animated Visualizations
              </h3>
              <div className="aspect-video bg-bg-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-tertiary text-sm">
                  D3.js / Chart.js demos coming soon
                </p>
              </div>
              <p className="text-text-secondary text-sm mt-4">
                Interactive charts exploring People Analytics concepts like
                time-to-fill trends and retention cohorts.
              </p>
            </div>

            {/* Mini Data Stories Placeholder */}
            <div className="bg-bg-secondary border border-border-subtle rounded-xl p-6">
              <span className="text-accent-teal text-xs font-medium uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-3 mb-4">
                Data Stories
              </h3>
              <div className="aspect-video bg-bg-tertiary rounded-lg flex items-center justify-center">
                <p className="text-text-tertiary text-sm">
                  Mini analyses coming soon
                </p>
              </div>
              <p className="text-text-secondary text-sm mt-4">
                Short-form data narratives combining analysis with compelling
                visualizations on workforce topics.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
