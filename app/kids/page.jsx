import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/product";
import styles from "./kids.module.css";

const ageBadges = ["0-2 yrs", "3-5 yrs", "6-8 yrs", "9-11 yrs", "12-14 yrs"];

export default function KidsPage() {
  const kidsProducts = products.filter(
    (product) => product.category === "kids"
  );

  return (
    <main className={styles.main}>
      <div className={styles.glowLayer}>
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />
      </div>

      <section className={styles.section}>
        <div className={styles.heroShell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroTextBlock}>
              <p className={styles.heroTag}>Kids Capsule 2026</p>
              <h1 className={styles.heroTitle}>
                Color-pop looks crafted for{" "}
                <span className={styles.heroAccent}>curious explorers</span>
              </h1>
              <p className={styles.heroCopy}>
                Soft, breathable fabrics with reinforced seams and sensory-friendly
                trims. Designed to keep up with every cartwheel, kick, and
                story-time snuggle.
              </p>

              <div className={styles.badgeRow}>
                {ageBadges.map((age) => (
                  <span key={age} className={styles.ageBadge}>
                    {age}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.infoPanel}>
              <div className={`${styles.infoBubble} ${styles.bubbleOne}`} />
              <div className={`${styles.infoBubble} ${styles.bubbleTwo}`} />
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Playground tested</p>
                  <p className={styles.infoValue}>30K steps/day</p>
                  <p className={styles.infoText}>Durability benchmark per outfit.</p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Fabric blend</p>
                  <p className={styles.infoValue}>68% cotton</p>
                  <p className={styles.infoText}>
                    With aloe-soft finish & stretch.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <p className={styles.infoLabel}>Safety</p>
                  <p className={styles.infoValue}>Zero toxins</p>
                  <p className={styles.infoText}>
                    Certified kid-safe hardware & dyes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <div>
            <p className={styles.catalogTag}>Catalog</p>
            <h2 className={styles.catalogTitle}>Playwear lineup</h2>
          </div>
          <button className={styles.catalogAction}>Filter by age</button>
        </div>

        <div className={styles.gridWrapper}>
          <ProductGrid products={kidsProducts} />
        </div>
      </section>
    </main>
  );
}
