import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Standard‑Compliant E‑Invoicing",
    body:
      "Issue invoices that meet FIRS and UBL 2.1 standards out of the box — no manual formatting required.",
    icon: "/assets/icon-1.png",
    accent: "from-[#2B52C3] to-[#1E3DA3]",
    tag: "01",
  },
  {
    title: "Real‑Time Validation",
    body:
      "Every invoice is validated against tax rules and signed instantly — errors caught before they cost you.",
    icon: "/assets/icon-2.png",
    accent: "from-[#3A66E0] to-[#2B52C3]",
    tag: "02",
  },
  {
    title: "Audit‑Ready Reporting",
    body:
      "Generate FIRS, VAT and WHT reports with one click. Full trail, immutable history, zero stress.",
    icon: "/assets/icon-3.png",
    accent: "from-[#1E3DA3] to-[#15307F]",
    tag: "03",
  },
  {
    title: "Secure Cloud Storage",
    body:
      "Encrypted, geo‑redundant storage for every invoice — retrieve any record in seconds, anywhere.",
    icon: "/assets/icon-4.png",
    accent: "from-[#2B52C3] to-[#3A66E0]",
    tag: "04",
  },
];

export default function Features() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".f-card", {
        y: 30,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: ".f-grid", start: "top 90%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="features"
      ref={root}
      data-testid="features-section"
      className="relative py-24 md:py-32 bg-[#0B1530] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/3 w-[420px] h-[420px] rounded-full bg-ng-blue/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-ng-blue">
            <span className="w-6 h-px bg-ng-blue" />
            Platform Capabilities
          </div>
          <h2
            className="f-title mt-4 font-display font-extrabold text-[34px] leading-[1.08] sm:text-[44px] lg:text-[52px] text-white"
            data-testid="features-headline"
          >
            Four pillars. One{" "}
            <span className="font-serif-accent text-ng-blue">unstoppable</span>{" "}
            tax engine.
          </h2>
          <p className="f-sub mt-5 text-[16.5px] text-white/70 max-w-2xl leading-relaxed">
            Every feature in NorthGate exists to remove friction from compliance
            — so finance teams move faster, with full confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="f-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <article
              key={i}
              className="f-card feature-card relative bg-[#0B1530] border border-black/8 rounded-2xl p-6 overflow-hidden"
              data-testid={`feature-card-${i}`}
            >
              {/* Accent corner */}
              <div
                className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${it.accent} opacity-[0.08]`}
              />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-ng-blue-soft/70 border border-ng-blue/15 flex items-center justify-center">
                <img
                  src={it.icon}
                  alt={it.title}
                  className="w-12 h-12 object-contain"
                  data-testid={`feature-icon-${i}`}
                />
              </div>

              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] font-bold text-ng-blue/70">
                Feature · {it.tag}
              </div>
              <h3
                className="mt-2 font-display font-bold text-[19px] text-white leading-snug"
                data-testid={`feature-title-${i}`}
              >
                {it.title}
              </h3>
              <p className="mt-3 text-[14.5px] text-white/70 leading-relaxed">
                {it.body}
              </p>

              {/* footer rule */}
              <div className="mt-6 flex items-center justify-between text-[12px] font-semibold text-ng-blue">
                <span>Learn more</span>
                <span className="w-7 h-7 rounded-full bg-ng-blue/8 flex items-center justify-center group-hover:bg-ng-blue group-hover:text-white">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
