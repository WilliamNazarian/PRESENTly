import React from "react";
import Image from "next/image";
import logo from "../../assets/presentlyLogo.png";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { SignoutButton } from "../../components/login-components/GoogleSigninSignOut";

function Navbar() {
  return (
    <div className="navbar sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-24 bg-blue-200">
      <div className="flex-1">
        <Link href="/home" className="hover:bg-blue-300 p-1 rounded-lg">
          <Image src={logo} className="w-44" alt="Picture of logo" priority />
        </Link>
      </div>
      <div className="flex-none gap-6">
        <Link href="/reviews" className=" hover:opacity-70">
          Reviews
        </Link>
        <Link href="/reviews" className=" hover:opacity-70">
          About
        </Link>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold h-full flex items-center justify-center">W</span>
            </div>
          </div>
          <ul className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
            <li>
              <Link href="/profile">
                <FaRegUser />
                Profile
              </Link>
            </li>
            <li>
              <SignoutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
