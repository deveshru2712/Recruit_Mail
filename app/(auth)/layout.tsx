import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
