import React from "react";

const Overlay = () => {
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

      {/* Grid overlay - now properly visible */}
      <div
        className="absolute inset-0 z-10 opacity-30" // Changed from mix-blend-overlay
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Your Content/Components */}
    </div>
  );
};

export default Overlay;
