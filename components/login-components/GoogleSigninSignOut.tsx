"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io";

export function SigninButton() {
  return (
    <div>
      <button onClick={() => signIn("google", { callbackUrl: "/home" })} className="w-full rounded-md bg-gray-800 py-3 text-white hover:bg-gray-700 flex justify-center items-center">
        <FcGoogle className="mr-2" size="1.5em" />
        Sign in with Google
      </button>
    </div>
  );
}

export function SignoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>
      <IoIosLogOut />
      Logout
    </button>
  );
}

//const { data: session } = useSession();

// if (session && session.user) {
//   return (
//     <div className="flex gap-4 ml-auto">
//       <p className="text-sky-600">{session.user.name}</p>
//       <button onClick={() => signOut()} className="text-red-600">
//         Sign Out
//       </button>
//     </div>
//   );
// }
//import signout for signout
