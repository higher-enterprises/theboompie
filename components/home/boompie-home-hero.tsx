import Image from "next/image";
import Link from "next/link";
import "./boompie-home-hero.css";

export type BoompieHeroButton = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
};

export type BoompieHomeHeroProps = {
  /** Transparent title artwork, e.g. /boompie/hero/good-finds-greater-joy.png */
  titleImage?: string;
  titleAlt?: string;
  /** Replaceable photograph. Use an uncropped image; the CSS mask creates the wavy edges. */
  photo?: string;
  photoAlt?: string;
  description?: string;
  buttons?: BoompieHeroButton[];
  className?: string;
};

const defaultButtons: BoompieHeroButton[] = [
  { label: "SHOP NEW ARRIVALS", href: "/search?sort=latest-desc", variant: "primary" },
  { label: "FIND A LOCATION", href: "/pages/locations", variant: "outline" },
];

export function BoompieHomeHero({
  titleImage = "/boompie/hero/good-finds-greater-joy.png",
  titleAlt = "GOOD FINDS. GREATER JOY.",
  photo = "/boompie/hero/shopper-photo.png",
  photoAlt = "Smiling shopper holding a purple Good Vibes shirt",
  description = "Pre-loved treasures. Unbeatable prices.\nAll for a happier planet.",
  buttons = defaultButtons,
  className = "",
}: BoompieHomeHeroProps) {
  return (
    <section className={`boompie-home-hero ${className}`} aria-label="The Boompie welcome">
      <div className="boompie-home-hero__photo" aria-hidden="true">
        <Image src={photo} alt="" fill priority sizes="(max-width: 767px) 100vw, 58vw" className="boompie-home-hero__photo-image" />
      </div>
      <div className="boompie-home-hero__yellow">
        <div className="boompie-home-hero__content">
          <Image src={titleImage} alt={titleAlt} width={765} height={256} priority className="boompie-home-hero__title" />
          <p className="boompie-home-hero__description">{description}</p>
          <div className="boompie-home-hero__buttons">
            {buttons.map((button, index) => {
              const cls = `boompie-home-hero__button boompie-home-hero__button--${button.variant ?? (index === 0 ? "primary" : "outline")}`;
              return button.external ? (
                <a key={`${button.href}-${index}`} href={button.href} className={cls} target="_blank" rel="noopener noreferrer">{button.label}</a>
              ) : (
                <Link key={`${button.href}-${index}`} href={button.href} className={cls}>{button.label}</Link>
              );
            })}
          </div>
        </div>
      </div>
      <span className="sr-only">{photoAlt}</span>
    </section>
  );
}

export default BoompieHomeHero;
