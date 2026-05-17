import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HERO_3D = "/assets/vp3d.png";

const points = [
  "End‑to‑end invoice issuance with FIRS verification in seconds.",
  "Built for Nigerian enterprises — VAT, WHT and currency native.",
  "Plug into your ERP, POS or accounting suite with a single API.",
];

export default function ValueProposition() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".vp-title", { y: 30, duration: 0.8, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: root.current, start: "top 85%" } });
      gsap.from(".vp-text > *", { y: 20, stagger: 0.08, duration: 0.7, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: root.current, start: "top 85%" } });
      gsap.from(".vp-3d", { scale: 0.92, duration: 1, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: root.current, start: "top 85%" } });
      gsap.to(".vp-3d-inner", { y: -20, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
    },
    { scope: root },
  );

  return (
    <section id="solution" ref={root} data-testid="value-proposition" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ng-bg" />
      <div className="absolute inset-0 opacity-[0.55] dotted-divider pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="vp-3d relative mx-auto max-w-[560px]">
            <div className="absolute inset-8 rounded-[40px] bg-white/70 backdrop-blur-sm border border-ng-blue/10 shadow-ngsoft" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[88%] aspect-square rounded-full border border-ng-blue/15" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[60%] aspect-square rounded-full border border-ng-blue/10" />
            </div>
            <div className="absolute top-4 left-0 z-20 bg-white shadow-ngcard rounded-2xl border border-black/5 px-3 py-2 ng-float">
              <div className="text-[10px] uppercase tracking-widest text-ng-muted font-bold">Latency</div>
              <div className="text-base font-extrabold text-ng-text">&lt; 800ms</div>
            </div>
            <div className="absolute bottom-8 right-0 z-20 bg-white shadow-ngcard rounded-2xl border border-black/5 px-3 py-2 ng-float-slow">
              <div className="text-[10px] uppercase tracking-widest text-ng-muted font-bold">Uptime</div>
              <div className="text-base font-extrabold text-ng-green">99.99%</div>
            </div>
            <div className="vp-3d-inner relative z-10 flex items-center justify-center">
              <img src={HERO_3D} alt="NorthGate 3D compliance visual" className="w-[78%] h-auto drop-shadow-[0_40px_60px_rgba(43,82,195,0.22)]" data-testid="vp-3d-image" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] font-bold text-ng-blue">
            <span className="w-6 h-px bg-ng-blue" />
            The NorthGate Difference
          </div>
          <h2 className="vp-title mt-4 font-display font-extrabold text-[34px] leading-[1.08] sm:text-[44px] lg:text-[52px] text-[#0F1B3D]" data-testid="vp-headline">
            One compliance layer for <span className="font-serif-accent text-ng-blue">every</span> invoice you issue.
          </h2>
          <div className="vp-text">
            <p className="mt-6 text-[16.5px] text-ng-muted leading-relaxed max-w-xl">NorthGate gives finance and operations teams a single, intelligent gateway to handle e‑invoicing, validation, and reporting — quietly working in the background while you focus on growth.</p>
            <ul className="mt-7 space-y-3.5 max-w-xl">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3" data-testid={`vp-point-${i}`}>
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-ng-blue text-white flex items-center justify-center"><Check size={12} strokeWidth={3} /></span>
                  <span className="text-[15.5px] text-ng-text leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <a href="#features" data-testid="vp-cta" className="mt-9 inline-flex items-center gap-2 text-ng-blue font-semibold text-[15px] group">
              See the platform in action
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
