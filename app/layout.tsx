
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import localFont from "next/font/local";
import { ReactNode } from "react";

import { BoompieFooter } from "components/BoompieFooter";
import { AnnouncementBar } from "components/layout/AnnouncementBar";
import { BoompieHeader } from "components/layout/BoompieHeader";

import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-poppins",
});

const titanOne = localFont({
  src: "../public/fonts/TitanOne-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-titan-one",
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || "The Boompie - Great Finds. Great Deals. Greater Joy.",
    template: `%s | ${SITE_NAME || "The Boompie  - Great Finds. Great Deals. Greater Joy."}`,
  },
  description:
    "The Boompie — Great Finds. Great Deals. Greater Joy. Discover pre-loved treasures, vintage gems, and everyday bargains.",
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Pass the cart promise to the Shopify cart provider.
  const cart = getCart();

  return (
    <html lang="en" className={`${poppins.variable} ${titanOne.variable}`}>
      <body className={`${poppins.className} min-h-screen bg-[#fffaf0] text-black selection:bg-[#ffba16] selection:text-black`}>
        <CartProvider cartPromise={cart}>
          {/* Global announcement bar */}
          <AnnouncementBar />

          {/* Global storefront navigation */}
          <BoompieHeader />

          {/* Page-specific content */}
          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          {/* Global footer — displayed on every storefront page */}
          <BoompieFooter />

          {/* Global notifications */}
        </CartProvider>
      </body>
    </html>
  );
}
