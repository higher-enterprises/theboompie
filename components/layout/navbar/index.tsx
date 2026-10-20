import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import type { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

// Order is intentional. Only shopping departments appear in the navbar.
const DEPARTMENTS = [
  'Women', 'Men', 'Kids', 'Shoes', 'Accessories', 'Home',
  'Beauty', 'Toys', 'Electronics', 'Games', 'Vintage', 'Bargains'
] as const;

function normalizeTitle(title: string) {
  return title.trim().toLowerCase().replace(/\s+/g, ' ');
}

export async function Navbar() {
  const shopifyMenu = await getMenu('next-js-frontend-header-menu');
  const configured = new Map(
    shopifyMenu.map((item: Menu) => [normalizeTitle(item.title), item])
  );

  // Prefer the destination configured in Shopify. For departments not yet
  // configured, use Shopify collection routes so all twelve are visible.
  const menu: Menu[] = DEPARTMENTS.map((title) => {
    const existing = configured.get(normalizeTitle(title));
    return existing ?? {
      title,
      path: `/collections/${title.toLowerCase().replace(/\s+/g, '-')}`
    };
  });

  return (
    <nav aria-label="Main shopping navigation" className="w-full border-b border-neutral-200 bg-[#fffaf2] dark:border-neutral-800 dark:bg-neutral-950">
      {/* Logo, search, and cart: no announcement bar or promotional links. */}
      <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-3 px-4 py-3 lg:px-6">
        <div className="flex shrink-0 items-center md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        <Link href="/" prefetch className="flex shrink-0 items-center gap-2" aria-label={`${SITE_NAME || 'The Boompie'} home`}>
          <LogoSquare />
          <span className="hidden text-sm font-semibold uppercase tracking-wide lg:block">{SITE_NAME}</span>
        </Link>

        <div className="mx-auto hidden w-full max-w-xl md:block">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        <div className="ml-auto shrink-0">
          <CartModal />
        </div>
      </div>

      {/* Horizontal scroll prevents category names from squeezing or wrapping. */}
      <div className="hidden border-t border-neutral-200/70 md:block dark:border-neutral-800">
        <div className="mx-auto max-w-screen-2xl overflow-x-auto px-4 lg:px-6">
          <ul className="flex min-w-max items-center justify-center gap-5 py-3 text-xs font-semibold uppercase tracking-wide lg:gap-7">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch
                  className={`whitespace-nowrap transition-colors hover:text-[#7a329e] hover:underline hover:underline-offset-4 ${item.title === 'Bargains' ? 'text-[#9b287e]' : 'text-neutral-800 dark:text-neutral-100'}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
