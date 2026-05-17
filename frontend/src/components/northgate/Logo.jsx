import React from "react";

/**
 * NorthGate Logo — updated with the version 3 branding.
 */
export default function Logo({ size = "md" }) {
  const height = size === "sm" ? 44 : size === "lg" ? 72 : 56;

  return (
    <div
      className="flex items-center select-none py-1"
      data-testid="northgate-logo"
    >
      <img
        src="/assets/northgate-logo-v3.png"
        alt="NorthGate logo"
        className="h-auto block"
        style={{ height: `\${height}px` }}
      />
    </div>
  );
}
