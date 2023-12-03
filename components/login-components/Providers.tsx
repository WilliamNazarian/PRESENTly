"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

export const AuthProviders = (props: Props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export const QueryProviders = (props: Props) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
