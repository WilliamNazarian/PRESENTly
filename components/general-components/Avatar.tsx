"use client"

import React from "react";
import { useSession } from "next-auth/react";

function Avatar() {
  const { data: session } = useSession();
  console.log(session)
  return <span className="text-white font-bold h-full flex items-center justify-center">{session?.user?.name?.charAt(0)}</span>;
}

export default Avatar;
