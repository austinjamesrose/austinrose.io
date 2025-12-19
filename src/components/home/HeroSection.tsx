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
        <div className="max-w-[896px] mx-auto">
          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Headshot */}
            <ScrollReveal delay={0.1}>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Austin Rose"
                    width={280}
                    height={280}
                    className="rounded-full border-2 border-bg-tertiary shadow-lg"
                    priority
                  />
                  {/* Decorative sparkle on headshot */}
                  <Sparkle color="var(--accent-primary)">
                    <m.div
                      className="absolute -top-4 -right-4 text-accent-coral text-3xl"
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
              </div>
            </ScrollReveal>

            {/* Right Column: Text Content */}
            <div className="text-center lg:text-left">
              {/* Greeting */}
              <ScrollReveal delay={0.2}>
                <h1 className="font-display text-[4.5rem] md:text-[5.5rem] leading-[1.05] text-text-primary mb-6">
                  Hi, I'm Austin
                </h1>
              </ScrollReveal>

              {/* Title */}
              <ScrollReveal delay={0.3}>
                <p className="text-text-secondary text-xl md:text-2xl mb-8">
                  People Analytics Leader
                </p>
              </ScrollReveal>

              {/* Value prop */}
              <ScrollReveal delay={0.4}>
                <p className="text-text-secondary mb-10 text-lg md:text-xl leading-relaxed">
                  People Analytics leader who partners with HR and business leaders
                  to turn workforce data into strategic action. Proven track record
                  building analytics infrastructure, delivering executive-level
                  insights, and driving measurable business outcomes.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={0.5}>
                <div className="flex gap-4 justify-center lg:justify-start">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
