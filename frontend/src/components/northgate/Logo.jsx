import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Logo({ size = "md" }) {
  const sizes = {
    sm: { icon: 16, text: "text-[15px]" },
    md: { icon: 20, text: "text-[17px]" },
    lg: { icon: 24, text: "text-[20px]" },
  };
  const s = sizes[size] || sizes.md;
  return (
    <a href="#top" className="inline-flex items-center gap-2 group" data-testid="logo">
      <div className="w-8 h-8 rounded-lg bg-ng-blue flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(43,82,195,0.6)] group-hover:scale-105 transition-transform">
        <ShieldCheck size={s.icon} className="text-white" strokeWidth={2.5} />
      </div>
      <span className={`font-display font-extrabold tracking-tight text-ng-text ${s.text}`}>
        North<span className="text-ng-blue">Gate</span>
      </span>
    </a>
  );
}
