import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  { title: "Men", href: "/men", accentClass: styles.accentCyan },
  { title: "Women", href: "/women", accentClass: styles.accentRose },
  { title: "Kids", href: "/kids", accentClass: styles.accentAmber },
  { title: "Sale", href: "/sale", accentClass: styles.accentLime },
];

const highlights = [
  "Free worldwide shipping over ₹2,000",
  "New arrivals every Monday",
  "Exclusive member perks & early access",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.glow}>
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <section className={styles.hero}>
        <span className={styles.seasonTag}>Winter • 2026</span>
        <div>
          <h1 className={styles.heroTitle}>
            Drape Yourself in
            <span className={styles.heroEmphasis}>Effortless Luxury</span>
          </h1>
          <p className={styles.heroText}>
            Curated silhouettes for Men, Women, Kids & Sale events. Discover
            tailored essentials, bold statements, and limited drops crafted to
            move with you.
          </p>
        </div>

        <div className={styles.heroCtas}>
          <Link href="/women" className={styles.primaryCta}>
            Explore Collection <span>→</span>
          </Link>
          <Link href="/sale" className={styles.secondaryCta}>
            View Sale
          </Link>
        </div>

        <div className={styles.highlights}>
          {highlights.map((item) => (
            <span key={item} className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.collectionsSection}>
        <div className={styles.collectionsCard}>
          <div className={styles.collectionsHeader}>
            <div>
              <p className={styles.collectionsHeaderTagline}>Collections</p>
              <h2 className={styles.collectionsHeaderTitle}>Shop By Persona</h2>
            </div>
            <Link href="/men" className={styles.collectionsAllLink}>
              All categories ↗
            </Link>
          </div>

          <div className={styles.collectionsGrid}>
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className={`${styles.collectionCard} ${category.accentClass}`}
              >
                <div className={styles.collectionContent}>
                  <p className={styles.collectionCategory}>{category.title}</p>
                  <h3 className={styles.collectionTitle}>
                    {category.title} Edit
                  </h3>
                  <p className={styles.collectionBody}>
                    Tailored pieces curated for the modern wardrobe. Tap to
                    explore fits, textures, and tonal play.
                  </p>
                  <span className={styles.collectionCta}>
                    Shop now <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
