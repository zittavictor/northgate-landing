import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  ShieldCheck,
  FileText,
  BarChart3,
  RefreshCw,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Smart E-Invoicing",
    body: "Auto-generate FIRS-compliant invoices with embedded tax calculations and UBL 2.1 formatting — in milliseconds.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Validation",
    body: "Every invoice passes live FIRS validation before issuance. Zero invalid submissions, zero penalties.",
    accent: "green",
  },
  {
    icon: FileText,
    title: "FIRS Compliance",
    body: "Stay current with FIRS mandates automatically. Our engine updates in real time as regulations evolve.",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Audit-Ready Reporting",
    body: "One-click audit packages with full invoice trails, VAT summaries, and submission logs ready for FIRS review.",
    accent: "green",
  },
  {
    icon: RefreshCw,
    title: "ERP Integration",
    body: "Plug NorthGate into SAP, Oracle, Sage or any custom stack via our RESTful API — no rework required.",
    accent: "blue",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    body: "SOC 2 aligned, end-to-end encrypted, and hosted on ISO 27001-compliant infrastructure.",
    accent: "green",
  },
];

export default function Features() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".feat-card", {
        y: 32,
        stagger: 0.07,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: root.current, start: "top 88%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="features"
      ref={root}
      data-testid="features-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-ng-blue">
            <span className="w-6 h-px bg-ng-blue" />
            Platform Features
            <span className="w-6 h-px bg-ng-blue" />
          </div>
          <h2
            className="mt-4 font-display font-extrabold text-[34px] leading-[1.08] sm:text-[44px] lg:text-[52px] text-[#0F1B3D]"
            data-testid="features-headline"
          >
            Everything you need to invoice with{" "}
            <span className="font-serif-accent text-ng-blue">confidence</span>.
          </h2>
          <p className="mt-5 text-[16px] text-ng-muted leading-relaxed">
            Six core capabilities designed for Nigerian enterprises navigating
            the new FIRS e-invoicing mandate.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="feat-card feature-card group rounded-2xl p-6 border border-black/8 bg-white hover:border-ng-blue/20"
                data-testid={`feature-card-${i}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    f.accent === "blue"
                      ? "bg-ng-blue-soft text-ng-blue"
                      : "bg-ng-green/10 text-ng-green"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display font-bold text-[18px] text-ng-text">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-ng-muted leading-relaxed">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
