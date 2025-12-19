"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Sparkle, MagneticButton, ScrollReveal, ParticleBackground } from "@/components/animations";
import { m } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticleBackground particleCount={50} connectionDistance={100} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(232,124,92,0.08)_0%,transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Row 1: Headshot + Greeting inline */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
              {/* Smaller inline headshot */}
              <div className="relative flex-shrink-0">
                <Image
                  src="/images/headshot.jpg"
                  alt="Austin Rose"
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-bg-tertiary shadow-lg"
                  priority
                />
                {/* Decorative sparkle on headshot */}
                <Sparkle color="var(--accent-primary)">
                  <m.div
                    className="absolute -top-2 -right-2 text-accent-coral text-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    &#10022;
                  </m.div>
                </Sparkle>
              </div>
              {/* Greeting text */}
              <h1 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.15] text-text-primary text-center md:text-left">
                Hi! I&apos;m Austin, a curious People Analytics leader.
              </h1>
            </div>
          </ScrollReveal>

          {/* Row 2: Full-width description */}
          <ScrollReveal delay={0.3}>
            <p className="text-text-secondary mb-10 text-lg md:text-xl leading-relaxed text-center md:text-left">
              People Analytics leader who partners with HR and business leaders
              to turn workforce data into strategic action. Proven track record
              building analytics infrastructure, delivering executive-level
              insights, and driving measurable business outcomes.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.4}>
            <div className="flex gap-4 justify-center md:justify-start">
              <MagneticButton strength={0.2}>
                <Link
                  href="/work"
                  className="bg-accent-coral text-white px-6 py-3 rounded-lg font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-coral/30 transition-all duration-200 inline-block"
                >
                  View My Work
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link
                  href="/contact"
                  className="border border-text-tertiary text-text-primary px-6 py-3 rounded-lg font-medium hover:border-accent-coral hover:text-accent-coral hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-coral/30 transition-all duration-200 inline-block"
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
