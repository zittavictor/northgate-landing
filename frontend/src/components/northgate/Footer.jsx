import React from "react";
import Logo from "./Logo";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative bg-white border-t border-black/8"
      data-testid="footer"
    >
      {/* Top CTA banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#2B52C3] to-[#15307F] text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-ng-green/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-[12px] uppercase tracking-[0.22em] font-bold text-white/70">
                Step into the new standard
              </div>
              <h3 className="mt-3 font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05]">
                Make every invoice{" "}
                <span className="font-serif-accent text-white">
                  compliant
                </span>{" "}
                by design.
              </h3>
              <p className="mt-4 text-white/70 max-w-xl text-[15.5px] leading-relaxed">
                Talk to a NorthGate specialist about deploying smart e‑invoicing
                across your organisation.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="mailto:enquiry@northgateds.com.ng"
                className="bg-white text-ng-blue px-6 py-3.5 rounded-full text-[15px] font-semibold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
                data-testid="footer-cta-email"
              >
                Get a demo
                <ArrowUpRight size={17} />
              </a>
              <a
                href="tel:+2349064048777"
                className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full text-[15px] font-semibold inline-flex items-center gap-2 hover:bg-white/15 transition-colors"
                data-testid="footer-cta-call"
              >
                Call us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Logo size="lg" />
          <p className="mt-5 text-[14.5px] text-ng-muted max-w-md leading-relaxed">
            NorthGate Digital Services — leading the future of tax compliance
            through intelligent, FIRS‑aligned e‑invoicing infrastructure.
          </p>

          <div className="mt-7 space-y-3">
            <div className="flex items-start gap-3 text-[14px] text-ng-text">
              <MapPin size={16} className="text-ng-blue mt-0.5" />
              <span data-testid="footer-address">
                Suite 18, Sila Zeka Plaza, 29 Adebayo Adedeji Crescent, Utako,
                Abuja.
              </span>
            </div>
            <div className="flex items-center gap-3 text-[14px] text-ng-text">
              <Phone size={16} className="text-ng-blue" />
              <a
                href="tel:+2349064048777"
                className="hover:text-ng-blue"
                data-testid="footer-phone"
              >
                +234 906 404 8777
              </a>
            </div>
            <div className="flex items-center gap-3 text-[14px] text-ng-text">
              <Mail size={16} className="text-ng-blue" />
              <a
                href="mailto:enquiry@northgateds.com.ng"
                className="hover:text-ng-blue"
                data-testid="footer-email"
              >
                enquiry@northgateds.com.ng
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-ng-blue">
              Platform
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ng-text">
              <li>
                <a href="#solution" className="hover:text-ng-blue">
                  Solution
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ng-blue">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ng-blue">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-ng-blue">
              Company
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ng-text">
              <li>
                <a href="#about" className="hover:text-ng-blue">
                  About
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiry@northgateds.com.ng"
                  className="hover:text-ng-blue"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiry@northgateds.com.ng"
                  className="hover:text-ng-blue"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-ng-blue">
              Legal
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ng-text">
              <li>
                <a href="#" className="hover:text-ng-blue">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ng-blue">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ng-blue">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-ng-muted">
          <span>© {year} NorthGate Digital Services. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ng-green inline-block" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
