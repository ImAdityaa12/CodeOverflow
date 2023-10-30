import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/themeProvider";
export const metadata: Metadata = {
  title: "CodeOverflow",
  description:
    "At CodeOverflow, our vision is to build a thriving global community where programmers of all levels, from beginners to experts, can come together to learn, share, and grow. We believe that by fostering a culture of knowledge exchange and collaboration, we can empower individuals to master the art of coding and drive innovation in the ever-expanding world of technology.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover: text-promary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
