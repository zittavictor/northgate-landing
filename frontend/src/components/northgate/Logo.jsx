import React from "react";

/**
 * NorthGate Logo — updated with the enhanced, bigger and bolder branding.
 */
export default function Logo({ size = "md" }) {
  // Enhanced sizes: sm (44), md (56), lg (72)
  const height = size === "sm" ? 44 : size === "lg" ? 72 : 56;

  return (
    <div
      className="flex items-center select-none py-1"
      data-testid="northgate-logo"
    >
      <img
        src="/assets/northgate-logo-v2.png"
        alt="NorthGate logo"
        className="h-auto block drop-shadow-sm"
        style={{ height: `\${height}px` }}
      />
    </div>
  );
}
