import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 flex justify-center items-center background">
      {children}
    </div>
  );
};

export default Layout;
