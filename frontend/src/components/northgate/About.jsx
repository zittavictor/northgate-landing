import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Users, Globe, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { k: "2024", v: "Founded" },
  { k: "FIRS", v: "Certified" },
  { k: "99.99%", v: "Uptime" },
  { k: "< 800ms", v: "Latency" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Engineering",
    body: "Every line of our platform is built around Nigeria's FIRS standards, not bolted on after the fact.",
  },
  {
    icon: Users,
    title: "Nigerian Enterprise DNA",
    body: "We understand the local regulatory landscape, currency nuances, and operational realities of Nigerian businesses.",
  },
  {
    icon: Globe,
    title: "Global Standards, Local Execution",
    body: "ISO 27001-aligned security, UBL 2.1 invoice formatting, and SOC-grade infrastructure — delivered locally.",
  },
  {
    icon: Award,
    title: "Trusted by Finance Leaders",
    body: "CFOs and compliance officers across sectors rely on NorthGate for audit-readiness and zero-penalty track records.",
  },
];

export default function About() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-pillar", {
        y: 28,
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
      id="about"
      ref={root}
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-ng-gray-bg overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[480px] h-[480px] rounded-full bg-ng-blue/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-ng-blue">
              <span className="w-6 h-px bg-ng-blue" />
              About NorthGate
            </div>
            <h2
              className="mt-4 font-display font-extrabold text-[34px] leading-[1.08] sm:text-[44px] text-[#0F1B3D]"
              data-testid="about-headline"
            >
              Built for Nigeria's tax future.
            </h2>
            <p className="mt-6 text-[16px] text-ng-muted leading-relaxed">
              NorthGate Digital Services was founded with a singular mission: to
              make FIRS-compliant e-invoicing effortless for Nigerian
              enterprises. We believe compliance shouldn't be a burden — it
              should be invisible infrastructure.
            </p>
            <p className="mt-4 text-[16px] text-ng-muted leading-relaxed">
              Our platform sits at the intersection of tax technology and
              enterprise software, giving organisations of every size the tools
              to issue, validate, and report invoices without friction.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4" data-testid="about-stats">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-black/8 p-5 shadow-ngcard"
                  data-testid={`about-stat-${i}`}
                >
                  <div className="text-[28px] font-display font-extrabold text-ng-blue">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[13px] text-ng-muted">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="about-pillar rounded-2xl bg-white border border-black/8 p-6 shadow-ngcard"
                  data-testid={`about-pillar-${i}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-ng-blue-soft flex items-center justify-center">
                    <Icon size={20} className="text-ng-blue" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-[17px] text-ng-text">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] text-ng-muted leading-relaxed">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
