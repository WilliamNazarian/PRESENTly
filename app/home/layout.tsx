import React from "react";
import Navbar from "../../components/general-components/Navbar";

function homeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default homeLayout;
