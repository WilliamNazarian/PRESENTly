"use client";
import React from "react";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageProvider";
import present from "../../assets/present.webp";
import Image from "next/image";

function GiftSuggestions() {
  const { message, isLoading } = useContext(MessageContext);
  return (
    <>
      {isLoading && (
        <>
          <p className="text-xl font-medium">loading gifts</p>
          <span className="loading loading-dots loading-lg" />
        </>
      )}
      {!message && !isLoading && (
        <>
          <h2 className="text-2xl font-medium px-24 text-center mb-5">This is where the gift suggestions will be displayed</h2>
          <Image height={260} width={260} alt="present picture" src={present} />
        </>
      )}
      {message && !isLoading && (
        <>
          <div className="px-28">
            {Object.entries(message).map(([key, gift]) => (
              <div key={key} className="mb-16">
                <h2 className="text-2xl font-semibold mb-4" >{key} : {gift.name}</h2>
                <p>Description: {gift.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default GiftSuggestions;
