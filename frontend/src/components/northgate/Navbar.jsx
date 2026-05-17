import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/8 shadow-[0_1px_24px_-12px_rgba(15,23,42,0.18)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center" data-testid="nav-home">
          <Logo size="md" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-[14.5px] font-medium text-ng-text/80 hover:text-ng-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:enquiry@northgateds.com.ng"
            data-testid="nav-contact-btn"
            className="text-[14.5px] font-semibold text-ng-text hover:text-ng-blue transition-colors"
          >
            Contact
          </a>
          <a
            href="https://app.northgateds.com.ng"
            data-testid="nav-cta-btn"
            className="ng-btn-primary px-5 py-2.5 rounded-full text-[14px] font-semibold"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-white/95 backdrop-blur border-t border-black/5"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ng-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://app.northgateds.com.ng"
              onClick={() => setOpen(false)}
              className="ng-btn-primary inline-block text-center px-5 py-3 rounded-full text-[14px] font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
