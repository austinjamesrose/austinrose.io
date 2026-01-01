"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="max-w-[768px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl no-underline hover:text-accent"
        >
          Austin Rose
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm no-underline hover:text-accent ${
                      isActive ? "active-nav" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-1 no-underline"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Dotted line under header - data grid aesthetic */}
      <div className="header-line" />

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-background border-b border-border">
          <ul className="max-w-[768px] mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block no-underline ${isActive ? "active-nav" : "hover:text-accent"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-border">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
