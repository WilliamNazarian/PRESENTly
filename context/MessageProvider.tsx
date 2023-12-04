"use client";
import { createContext, useState } from "react";

interface Gift {
  name: string;
  description: string;
}
type Gifts = Record<string, Gift> | null;

export const MessageContext = createContext<{
  message: Gifts | undefined;
  changeMessage: (message: Gifts) => void;
  isLoading: boolean,
  changeLoading: (isLoading: boolean) => void;
}>({
  message: {},
  changeMessage: () => {},
  isLoading: false,
  changeLoading: () => {},
});

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [giftMessage, setGiftMessage] = useState<Gifts>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeLoading = (loading: boolean) => {
    setIsLoading(loading);
  }

  const changeMessage = (message: Gifts) => {
    setGiftMessage(message);
  };

  return <MessageContext.Provider value={{ message: giftMessage, changeMessage, isLoading, changeLoading }}>{children}</MessageContext.Provider>;
}
