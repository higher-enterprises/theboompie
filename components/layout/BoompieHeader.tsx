
import CartModal from "components/cart/modal";
import { categories, categoryHref } from "lib/boompie/categories";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="relative z-[60] -translate-y-1 flex shrink-0 items-center"
          aria-label="The Boompie home"
        >
          <Image
  src="/boompie/hero/boompie-logo.png"
  alt="The Boompie — Great Finds. Great Deals. Greater Joy."
  width={210}
  height={80}
  priority
  className="h-auto w-[80px] md:w-[210px]"
/>  
        </Link>

        {/* Main navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-bold tracking-wide transition-colors hover:text-[#55258A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header tools */}
        <div className="flex shrink-0 items-center gap-5">
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
