import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Austin Rose for People Analytics opportunities.",
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/austinrose",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/austinrose",
    description: "View my code",
  },
  {
    name: "Email",
    href: "mailto:austin@austinrose.io",
    description: "Send me a message",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-fade-in">
            <div>
              <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-8">
                Let&apos;s Connect
              </h1>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10">
                I&apos;m always interested in discussing People Analytics, data
                visualization, or new opportunities. Feel free to reach out.
              </p>
              <a
                href="mailto:austin@austinrose.io"
                className="bg-accent-coral text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all inline-block text-lg md:text-xl"
              >
                austin@austinrose.io
              </a>
            </div>
            <div className="lg:pt-8">
              <h2 className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.3] text-text-primary mb-8">
                Other Ways to Connect
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="group block bg-bg-secondary border border-border-subtle rounded-xl p-6 hover:border-accent-coral/30 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary">
                          {link.name}
                        </h3>
                        <p className="text-text-secondary text-base mt-1">
                          {link.description}
                        </p>
                      </div>
                      <span className="text-text-tertiary text-2xl group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Resume Download */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-4">
                Download Resume
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                Get a PDF copy of my full resume with additional details about my experience and skills.
              </p>
            </div>
            <div className="lg:text-right">
              <a
                href="/resume.pdf"
                download
                className="border border-text-tertiary text-text-primary px-8 py-4 rounded-lg font-medium hover:border-accent-coral hover:text-accent-coral transition-all inline-block text-lg"
              >
                Download PDF
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
