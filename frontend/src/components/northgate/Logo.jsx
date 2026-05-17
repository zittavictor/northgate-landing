import React from "react";

/**
 * NorthGate Logo — updated with the official branding image.
 */
export default function Logo({ size = "md", showWord = true, mono = false }) {
  const height = size === "sm" ? 28 : size === "lg" ? 44 : 36;

  return (
    <div
      className="flex items-center select-none"
      data-testid="northgate-logo"
    >
      <img
        src="/assets/northgate-logo.png"
        alt="NorthGate logo"
        className="h-auto block"
        style={{ height: `\${height}px` }}
      />
    </div>
  );
}
