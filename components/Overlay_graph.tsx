import React from "react";

const Overlay_graph = () => {
  return (
    <>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </>
  );
};

export default Overlay_graph;
