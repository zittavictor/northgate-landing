import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const PHONE_IMG = "/assets/phone.png";

export default function Hero() {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(phoneRef.current, {
        y: -16,
        duration: 4.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-[112px] pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-ng-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[480px] h-[480px] rounded-full bg-ng-green/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold text-ng-blue bg-ng-blue/8 border border-ng-blue/15" data-testid="hero-pill">
            <Sparkles size={14} className="text-ng-blue" />
            FIRS-Ready E-Invoicing Platform
          </div>

          <h1 className="mt-6 font-display font-bold text-[40px] leading-[1.1] sm:text-[52px] lg:text-[60px] tracking-tight" style={{ color: "#2E2E2E" }} data-testid="hero-headline">
            Leading the Future of Tax Compliance Through Smart E&#8209;Invoicing
          </h1>

          <p className="mt-6 text-[16.5px] leading-relaxed text-ng-muted max-w-xl" data-testid="hero-sub">
            NorthGate transforms how Nigerian enterprises issue, validate and
            report invoices — fully aligned with FIRS standards. One platform.
            Real‑time validation. Always audit‑ready.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#solution" data-testid="hero-cta-primary" className="ng-btn-primary px-6 py-3.5 rounded-full text-[15px] font-semibold inline-flex items-center gap-2">
              Start with NorthGate
              <ArrowRight size={17} />
            </a>
            <a href="#features" data-testid="hero-cta-secondary" className="ng-btn-ghost px-6 py-3.5 rounded-full text-[15px] font-semibold inline-flex items-center gap-2">
              Explore Features
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ng-muted" data-testid="hero-trust">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-ng-green" />
              <span>FIRS Compliant</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-ng-muted/40" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ng-green opacity-75 ng-pulse" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ng-green" />
              </span>
              <span>Live validation 24/7</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-ng-muted/40" />
            <span>SOC‑grade security</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto w-full max-w-[520px] aspect-[4/5] flex items-center justify-center">
            <div ref={phoneRef} className="relative">
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[420px] sm:w-[340px] sm:h-[460px] md:w-[400px] md:h-[520px] rounded-[44px] bg-gradient-to-br from-[#2B52C3]/18 via-[#2B52C3]/8 to-[#10B981]/12 border border-ng-blue/20 shadow-[0_30px_80px_-20px_rgba(43,82,195,0.5)]" />
              <img src={PHONE_IMG} alt="NorthGate mobile app" className="relative z-10 w-[280px] sm:w-[320px] md:w-[380px] drop-shadow-[0_24px_50px_rgba(15,23,42,0.18)]" data-testid="hero-phone-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="logo-strip overflow-hidden">
          <div className="flex items-center gap-12 ng-marquee whitespace-nowrap text-ng-muted/70 text-[13px] font-semibold uppercase tracking-[0.18em]">
            {Array.from({ length: 2 }).map((_, k) => (
              <React.Fragment key={k}>
                <span>FIRS Standard</span>
                <span className="text-ng-blue">●</span>
                <span>UBL 2.1 Compliant</span>
                <span className="text-ng-blue">●</span>
                <span>ISO 27001 Aligned</span>
                <span className="text-ng-blue">●</span>
                <span>Real‑Time Validation</span>
                <span className="text-ng-blue">●</span>
                <span>Audit‑Ready</span>
                <span className="text-ng-blue">●</span>
                <span>Encrypted Cloud Storage</span>
                <span className="text-ng-blue">●</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
