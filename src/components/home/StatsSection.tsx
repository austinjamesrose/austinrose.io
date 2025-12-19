"use client";

import { Container } from "@/components/layout";
import { CountUp, ScrollReveal } from "@/components/animations";
import { staggerContainer, fadeUp } from "@/lib/animations/variants";

const stats = [
  {
    value: 55,
    prefix: "$",
    suffix: "M",
    label: "incremental revenue delivered",
    highlight: true,
  },
  {
    value: 23,
    suffix: "K+",
    label: "employees supported",
    highlight: false,
  },
  {
    value: 1,
    suffix: "k+",
    label: "custom reports built",
    highlight: false,
  },
  {
    value: 200,
    suffix: "+",
    label: "hours of work automated with AI in 2025",
    highlight: false,
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-bg-secondary border-t border-b border-white/10">
      <Container>
        <ScrollReveal
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center max-w-[1200px] mx-auto"
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              variants={fadeUp}
              delay={index * 0.15}
              className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-24 md:after:w-px md:after:bg-white/10 md:last:after:hidden"
            >
              <p
                className={`font-display text-[3.5rem] md:text-[5rem] leading-[1.1] ${
                  stat.highlight ? "text-accent-coral" : "text-text-primary"
                }`}
              >
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                  delay={0.3 + index * 0.2}
                />
              </p>
              <p className="text-text-secondary text-sm md:text-base mt-3">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
