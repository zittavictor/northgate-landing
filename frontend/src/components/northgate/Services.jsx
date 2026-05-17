import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Receipt,
  Network,
  ShieldCheck,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Receipt,
    title: "E‑Invoicing Implementation",
    body:
      "Roll out FIRS‑compliant invoicing across your business in weeks, not months.",
  },
  {
    icon: Network,
    title: "ERP & API Integration",
    body:
      "Connect SAP, Oracle, Sage, Zoho or any custom stack with our universal API.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Compliance Advisory",
    body:
      "Strategic guidance from specialists who understand the Nigerian tax landscape.",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    body:
      "Real‑time dashboards on submissions, VAT, WHT and reconciliation health.",
  },
];

export default function Services() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".srv-card", {
        y: 30,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: root.current, start: "top 90%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="services"
      ref={root}
      data-testid="services-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white" />
      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{ transparency: "0.45", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)", backgroundSize: "26px 26px" }}
      />
      <div className="absolute -top-40 right-1/3 w-[520px] h-[520px] rounded-full bg-ng-blue/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-ng-green/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-ng-green">
              <span className="w-6 h-px bg-ng-green" />
              Our Services
            </div>
            <h2
              className="mt-4 font-display font-extrabold text-[34px] leading-[1.08] sm:text-[44px] lg:text-[54px] text-[#0F1B3D]"
              data-testid="services-headline"
            >
              Beyond software — a{" "}
              <span className="font-serif-accent text-ng-green">partner</span>{" "}
              for every compliance milestone.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[16px] leading-relaxed text-[#0F1B3D]/70 max-w-md ml-auto">
              From first deployment to ongoing optimisation, our experts walk
              with you through every stage of digital tax transformation.
            </p>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="srv-card group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all"
                data-testid={`service-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-ng-blue flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(43,82,195,0.6)]">
                  <Icon size={22} className="text-[#0F1B3D]" />
                </div>
                <h3 className="mt-5 text-[#0F1B3D] font-display font-bold text-[18px] leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] text-[#0F1B3D]/65 leading-relaxed">
                  {s.body}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-ng-green opacity-80 group-hover:opacity-100">
                  Discover
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {[
            { k: "500+", v: "Invoices processed every minute" },
            { k: "99.99%", v: "Platform uptime, audited" },
            { k: "< 800ms", v: "Average validation latency" },
          ].map((it, i) => (
            <div
              key={i}
              className="bg-white p-7 sm:p-8"
              data-testid={`stat-${i}`}
            >
              <div className="text-[34px] sm:text-[40px] font-display font-extrabold text-[#0F1B3D] tracking-tight">
                {it.k}
              </div>
              <div className="mt-1 text-[13.5px] text-[#0F1B3D]/60">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
