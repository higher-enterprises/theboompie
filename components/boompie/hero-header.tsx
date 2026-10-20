
import Link from 'next/link';
import './hero-header.css';

const yellowPath = 'M 43 90 C 18 48 87 31 143 47 C 205 67 238 36 301 49 C 362 63 418 21 478 45 C 534 67 575 30 634 46 C 690 61 728 23 792 39 C 855 56 905 25 955 61 C 990 86 985 119 975 149 C 998 181 1004 208 979 239 C 1002 272 1000 310 978 341 C 998 380 995 411 971 447 C 994 481 975 523 936 536 C 882 553 849 536 795 550 C 732 568 689 534 625 548 C 560 563 525 533 465 550 C 403 564 356 535 297 549 C 236 562 195 535 139 545 C 85 554 29 521 31 481 C 7 446 18 416 34 382 C 10 343 18 312 33 278 C 11 240 20 207 34 176 C 14 146 22 116 43 90 Z';

const photoPath = 'M 66 80 C 105 26 169 30 224 46 C 285 64 323 25 390 42 C 451 62 496 20 559 39 C 622 57 676 22 736 43 C 799 63 846 31 907 53 C 967 74 989 104 968 150 C 995 191 983 231 970 267 C 993 305 989 344 974 382 C 994 422 988 463 958 493 C 930 536 878 534 816 527 C 748 520 710 555 645 539 C 580 525 540 551 479 537 C 413 524 370 555 303 537 C 240 522 203 553 145 536 C 92 520 51 531 43 488 C 23 454 46 425 37 391 C 19 357 40 330 36 296 C 16 263 39 234 36 202 C 17 165 42 123 66 80 Z';

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 22S5 13.7 5 9a7 7 0 0 1 14 0c0 4.7-7 13-7 13Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

export function BoompieHeroHeader() {
  return (
    <section
      className="bh-hero"
      aria-label="Good finds, greater joy"
    >
      <svg
        className="bh-photo-art"
        viewBox="0 0 1000 580"
        preserveAspectRatio="none"
        role="img"
        aria-label="Smiling shopper holding a purple Good Vibes shirt in a thrift store"
      >
        <defs>
          <clipPath id="bh-photo-clip">
            <path d={photoPath} />
          </clipPath>
        </defs>

        <image
          href="/boompie/hero/shop-photo.webp"
          x="0"
          y="0"
          width="1000"
          height="580"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#bh-photo-clip)"
        />

        <path
          d={photoPath}
          fill="none"
          stroke="#57238e"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="bh-yellow-shape"
        viewBox="0 0 1000 580"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={yellowPath} fill="#ffba16" />
      </svg>

      <div className="bh-hero-content">
        <span className="bh-flower" aria-hidden="true">
          ✿
        </span>

        <h1>
          GOOD FINDS.
          <br />
          GREATER{' '}
          <span className="bh-joy">
            J<span className="bh-smile">☺</span>Y.
          </span>
        </h1>

        <p>
          Pre-loved treasures. Unbeatable prices.
          <br />
          All for a happier planet.
        </p>

        <div className="bh-hero-actions">
          <Link
            className="bh-btn bh-btn-purple"
            href="/search?sort=latest-desc"
          >
            SHOP NEW ARRIVALS →
          </Link>

          <Link
            className="bh-btn bh-btn-outline"
            href="/pages/locations"
          >
            <PinIcon />
            FIND A LOCATION
          </Link>
        </div>
      </div>

      <span
        className="bh-spark bh-spark-one"
        aria-hidden="true"
      >
        ✳
      </span>

      <span
        className="bh-spark bh-spark-two"
        aria-hidden="true"
      >
        ✳
      </span>
    </section>
  );
}
