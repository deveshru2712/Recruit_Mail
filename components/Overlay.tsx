import React from "react";

export default function Overlay() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Base: Light background with radial gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000",
        }}
      />
    </div>
  );
}
