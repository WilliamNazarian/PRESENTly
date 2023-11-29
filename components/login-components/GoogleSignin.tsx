"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";

function SigninButton() {
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

  const popupCenter = (url: string, title: string) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(url, title, `width=${500 / systemZoom},height=${550 / systemZoom},top=${top},left=${left}`);

    newWindow?.focus();
  };

  return (
    <div>
      <button onClick={() => signIn("google", { callbackUrl: "/home" })} className="w-full rounded-md bg-gray-800 py-3 text-white hover:bg-gray-700 flex justify-center items-center">
        <FcGoogle className="mr-2" size="1.5em" />
        Sign in with Google
      </button>
    </div>
  );
}

export default SigninButton;
