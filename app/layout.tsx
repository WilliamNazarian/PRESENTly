import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProviders, QueryProviders } from "../components/login-components/Providers";
import { MessageProvider } from "../context/MessageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presently",
  description: "Personalized gift recommendations for your loved ones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>
          <QueryProviders>
            <MessageProvider>{children}</MessageProvider>
          </QueryProviders>
        </AuthProviders>
      </body>
    </html>
  );
}
