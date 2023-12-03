import React from "react";
import GiftForm from "../../components/home-components/GiftForm";


function page() {
  return (
    <div className="flex min-h-screen-nav">
      <div className="flex-1 bg-lime-50">
        <div className="flex flex-col items-center justify-center min-h-screen-nav">
          <GiftForm/>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default page;
