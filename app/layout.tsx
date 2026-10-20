
import { CartProvider } from "components/cart/cart-context";
import { WelcomeToast } from "components/welcome-toast";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";

import { AnnouncementBar } from "components/layout/AnnouncementBar";
import { BoompieHeader } from "components/layout/BoompieHeader";
import { BoompieFooter } from "components/BoompieFooter";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-geist-sans",
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
    <html lang="en" className={poppins.variable}>
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
          <Toaster closeButton />
          <WelcomeToast />
        </CartProvider>
      </body>
    </html>
  );
}
