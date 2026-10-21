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
  /** Optional custom headline artwork; otherwise render the editable two-line headline. */
  titleImage?: string;
  titleAlt?: string;
  photo?: string;
  photoAlt?: string;
  description?: string;
  buttons?: BoompieHeroButton[];
  className?: string;
};

const defaultButtons: BoompieHeroButton[] = [
  { label: "SHOP NEW ARRIVALS", href: "/shop/new-arrivals", variant: "primary" },
  { label: "SHOP OUR BARGAINS", href: "/shop/bargain-basement", variant: "outline" },
];

export function BoompieHomeHero({
  titleImage = "/boompie/hero/discover-the-greatest-joy.png",
  titleAlt = "DISCOVER THE GREATEST JOY.",
  photo = "/boompie/hero/shopper-photo.png",
  photoAlt = "Smiling shopper holding a purple Good Vibes shirt",
  description = "Shop The Boompie for unique items, pre-loved treasures, handmade goods, vintage gems, and a more joyful you!",
  buttons = defaultButtons,
  className = "",
}: BoompieHomeHeroProps) {
  return (
    <section className={`boompie-home-hero ${className}`} aria-label="The Boompie welcome">
      <div className="boompie-home-hero__photo" aria-hidden="true">
        <Image src={photo} alt="" fill priority sizes="(max-width: 767px) 100vw, 48vw" className="boompie-home-hero__photo-image" />
      </div>
      <div className="boompie-home-hero__yellow">
        <div className="boompie-home-hero__content">
          {titleImage ? (
            <Image src={titleImage} alt={titleAlt} width={2118} height={583} priority className="boompie-home-hero__title-image" />
          ) : (
            <h1 className="boompie-home-hero__title">
              <span>DISCOVER THE</span>
              <span>GREATEST <span className="boompie-home-hero__joy">J<span className="boompie-home-hero__smile" aria-label="O">☺</span>Y.</span></span>
            </h1>
          )}
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
