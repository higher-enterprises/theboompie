import Link from "next/link";
import "./boompie-hero.css";

// Each shape is a single, closed SVG path. The right-hand corners of the
// yellow panel and left-hand corners of the photograph are mirrored.
const yellowWave = [
  // Matching top-right and bottom-right shoulders; no lower tail.
  "M 80 66",
  "C 133 20 167 94 225 66",
  "S 317 22 375 66",
  "S 467 98 525 66",
  "S 617 22 675 66",
  "S 767 98 825 66",
  "C 892 27 951 73 956 142",
  "C 961 188 940 239 951 300",
  "C 940 361 961 412 956 458",
  "C 951 527 892 573 825 534",
  "C 767 502 733 578 675 534",
  "S 583 502 525 534",
  "S 433 578 375 534",
  "S 283 502 225 534",
  "C 167 506 133 580 80 534",
  "C 19 489 51 433 45 385",
  "C 39 347 31 325 45 300",
  "C 31 275 39 253 45 215",
  "C 51 167 19 111 80 66 Z",
].join(" ");

const photoWave = [
  // The photo is taller, and its upper-left/lower-left corners mirror.
  "M 92 58",
  "C 150 10 192 78 252 52",
  "S 358 18 418 52",
  "S 524 18 584 52",
  "S 690 18 750 52",
  "S 856 18 916 52",
  "C 984 39 988 99 976 154",
  "C 965 207 990 247 978 300",
  "C 990 353 965 393 976 446",
  "C 988 501 984 561 916 548",
  "C 856 582 810 548 750 548",
  "S 644 582 584 548",
  "S 478 582 418 548",
  "S 312 582 252 548",
  "C 192 522 150 590 92 542",
  "C 28 496 45 436 55 386",
  "C 66 338 40 322 50 300",
  "C 40 278 66 262 55 214",
  "C 45 164 28 104 92 58 Z",
].join(" ");

export function BoompieHero() {
  return (
    <section className="boompie-hero" aria-label="The Boompie welcome">
      <div className="boompie-hero__photo">
        <svg className="boompie-hero__photo-svg" viewBox="0 0 1000 600" preserveAspectRatio="none" role="img" aria-label="Smiling shopper holding a purple Good Vibes T-shirt outside The Boompie">
          <defs>
            <clipPath id="boompie-photo-wave" clipPathUnits="userSpaceOnUse">
              <path d={photoWave} />
            </clipPath>
          </defs>
          <image href="/boompie/hero/shopper-photo.png" x="0" y="0" width="1000" height="600" preserveAspectRatio="xMidYMid slice" clipPath="url(#boompie-photo-wave)" />
        </svg>
      </div>
      <div className="boompie-hero__yellow">
        <svg className="boompie-hero__yellow-svg" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <path d={yellowWave} fill="#ffb914" />
        </svg>
        <div className="boompie-hero__copy">
          <h1 className="boompie-hero__title">DISCOVER THE <br />GREATEST <span>J<span className="boompie-hero__smile">☺</span>Y.</span></h1>
          <p>New bargains. Pre-loved treasures. Vintage goods. Unbeatable prices.<br />All for a happier planet.</p>
          <div className="boompie-hero__actions">
            <Link href="/shop/new-arrivals" className="boompie-hero__button boompie-hero__button--primary">SHOP NEW ARRIVALS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoompieHero;
