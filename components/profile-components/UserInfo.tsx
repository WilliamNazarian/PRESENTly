"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

export function UserImage() {
  const { data: session } = useSession();
  return <>{session?.user?.image && <Image src={session?.user?.image} alt="User profile Image" width={300} height={300} className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />}</>;
}

export function UserEmail() {
  const { data: session } = useSession();
  return session?.user?.email;
}

export function UserName() {
  const { data: session } = useSession();
  return <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{session?.user?.name}</h3>;
}

export function UserBio() {
  const [bio, setBio] = useState<string>();
  const [writingBio, setWritingBio] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWritingBio(false);
  };
  return (
    <>
      {!bio && !writingBio && (
        <div className="font-medium leading-relaxed mb-4 flex items-center">
          <span>Write User Bio</span>
          <div className="ml-2 p-2 rounded-full bg-cyan-500 hover:bg-cyan-700 cursor-pointer flex items-center justify-center" onClick={() => setWritingBio(true)}>
            <FaEdit className="text-white" />
          </div>
        </div>
      )}
      {writingBio && (
        <form onSubmit={handleSubmit}>
          <textarea className="mb-4 border-black border-2 p-2 rounded" rows={4} onChange={(e) => setBio(e.target.value)} value={bio} />
          <button className="block shadow bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mx-auto" type="submit">
            Submit
          </button>
        </form>
      )}
      {bio && !writingBio && (
        <div className="mb-4">
          <p className="font-light leading-relaxed text-slate-600">{bio}</p>
          <button className="mt-2 p-2 rounded-full bg-cyan-500 hover:bg-cyan-700 cursor-pointer flex items-center justify-center" onClick={() => setWritingBio(true)}>
            <FaEdit className="text-white" />
            <span className="ml-2 text-white">Edit Bio</span>
          </button>
        </div>
      )}
    </>
  );
}
