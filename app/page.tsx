import gifts from "../assets/gifts.jpg";
import { FaGift } from "react-icons/fa";
import logo from "../assets/presentlyLogo.png";
import Image from "next/image";

import {SigninButton} from "../components/login-components/GoogleSigninSignOut";

export default function SignInPage() {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${gifts.src})`, backgroundSize: "80%" }}>
      <div className="absolute bg-gradient-to-b from-green-800 to-green-400 opacity-75 inset-0 z-0" />
      <div className="flex min-h-screen items-center justify-center mx-0">
        <div className="flex items-center justify-center self-center z-10">
          <div className="rounded-2xl overflow-hidden">
            <div className=" bg-cyan-200 p-8">
              <Image  src={logo} className="w-80" alt="Picture of logo" />
            </div>
            <div className="bg-white text-center p-8">
              <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
              <p className="text-gray-500">Please sign in to your google account.</p>
              <div className="mt-5">
                <SigninButton />
              </div>
            </div>
            <div className="bg-white text-xs text-center text-gray-400 pb-8">
              <span>Copyright © 2023-2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="rounded-2xl overflow-hidden">
            <div className="bg-cyan-800 p-8 flex justify-center items-center">
              <FaGift className="text-6xl text-white mr-3" />
              <h1 className="text-6xl font-semibold text-white">Presently</h1>
            </div>
            <div className="bg-white text-center p-8">
              <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
              <p className="text-gray-500">Please sign in to your google account.</p>
              <div className="mt-5">
                <GoogleSignin />
              </div>
            </div>
            <div className="bg-white text-xs text-center text-gray-400 pb-8">
              <span>Copyright © 2023-2024</span>
            </div>
          </div> */
}
