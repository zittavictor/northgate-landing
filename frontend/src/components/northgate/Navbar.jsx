import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-md border-b border-black/8 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg text-[14.5px] font-medium text-ng-text hover:text-ng-blue hover:bg-ng-blue/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:enquiry@northgateds.com.ng"
            data-testid="nav-cta"
            className="ng-btn-primary px-5 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center gap-2"
          >
            Request Demo
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-black/8 bg-white/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1"
          data-testid="mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-[15px] font-medium text-ng-text hover:bg-ng-blue/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:enquiry@northgateds.com.ng"
            className="mt-2 ng-btn-primary px-5 py-3 rounded-full text-[15px] font-semibold text-center"
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  );
}
