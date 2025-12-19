"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/playground", label: "Playground" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl text-text-primary hover:text-accent-coral transition-colors duration-[var(--transition-base)]"
        >
          AR
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-coral after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-accent-coral after:w-full"
                        : "text-text-secondary hover:text-text-primary after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
