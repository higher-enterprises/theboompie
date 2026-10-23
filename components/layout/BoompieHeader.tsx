
import CartModal from "components/cart/modal";
import { categories, categoryHref } from "lib/boompie/categories";
import Image from "next/image";
import Link from "next/link";
import BoompieMobileNav from "./BoompieMobileNav";

type IconName = "search" | "user" | "bag";

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    width: 24,
    height: 24,
    "aria-hidden": true as const,
  };

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="7.5" />
        <path d="m16 16 6 6" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="7" r="4" />
        <path d="M3 22v-2c0-9 18-9 18 0v2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 8h16l-1 14H5L4 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}


const navigation = categories.map((category) => ({
  label: category.name.toUpperCase(),
  href: categoryHref([category.slug]),
}));


export function BoompieHeader() {
  return (
    <header className="relative z-50 w-full bg-[#fffaf0]">
      <div className="flex w-full items-center justify-between gap-2 px-3 py-2 md:gap-4 md:px-[5vw] md:py-3">

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <BoompieMobileNav items={navigation} />

          {/* Logo */}
        <Link
          href="/"
          className="relative z-[60] flex shrink-0 items-center"
          aria-label="The Boompie home"
        >
          <Image
  src="/boompie/hero/boompie-logo.png"
  alt="The Boompie — Great Finds. Great Deals. Greater Joy."
  width={210}
  height={80}
  priority
  className="h-auto w-[125px] sm:w-[145px] md:w-[210px]"
/>  
        </Link>

        </div>

        {/* Main navigation */}
        <nav
          className="ml-auto hidden min-w-0 items-center justify-end gap-4 xl:gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[11px] font-bold tracking-wide transition-colors hover:text-[#55258A] xl:text-xs 2xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header tools */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4 lg:ml-2 lg:gap-4 xl:gap-5">
          <Link href="/search" aria-label="Search">
            <Icon name="search" />
          </Link>

          <a
            href={process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL || "#"}
            aria-label="Customer account"
            title={process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL ? "Sign in to your account" : "Configure Shopify customer account URL"}
          >
            <Icon name="user" />
          </a>

          <CartModal />
        </div>
      </div>
    </header>
  );
}
