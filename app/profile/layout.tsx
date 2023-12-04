import React from "react";
import Navbar from "../../components/general-components/Navbar";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default ProfileLayout;