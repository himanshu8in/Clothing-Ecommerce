import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/product";
import styles from "./sale.module.css";

const perks = [
  { label: "Extra markdowns", value: "-40%" },
  { label: "Limited drops", value: "12 hrs" },
  { label: "VIP early access", value: "Yes" },
];

export default function SalePage() {
  const saleProducts = products.filter(
    (product) => product.category === "sale"
  );

  return (
    <main className={styles.main}>
      <div className={styles.glowLayer}>
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <section className={styles.section}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroTag}>Midnight Sale Program</p>
            <h1 className={styles.heroTitle}>
              After-dark offers with{" "}
              <span className={styles.heroAccent}>vault-level exclusives</span>
            </h1>
            <p className={styles.heroBody}>
              Signature pieces, archival runway looks, and seasonal capsules now in
              limited-time rotations. Prices refresh every 12 hours.
            </p>
            <div className={styles.perkRow}>
              {perks.map((perk) => (
                <div key={perk.label}>
                  <p className={styles.perkLabel}>{perk.label}</p>
                  <p className={styles.perkValue}>{perk.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.infoPanel}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Event tiers</p>
                <p className={styles.infoTitle}>Priority access</p>
                <p className={styles.infoCopy}>
                  Members unlock the sale portal 6h before public release.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Inventory pulse</p>
                <p className={styles.infoTitle}>72 pieces left</p>
                <p className={styles.infoCopy}>
                  Auto-restock disabled until next moon cycle.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Payment perks</p>
                <p className={styles.infoTitle}>Split in 4</p>
                <p className={styles.infoCopy}>
                  Interest-free installments + free returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <div>
            <p className={styles.catalogTag}>Flash catalog</p>
            <h2 className={styles.catalogTitle}>Archive Vault</h2>
          </div>
          <div className={styles.catalogActions}>
            <button className={styles.actionButton}>Sort: Deepest drop</button>
            <button className={styles.actionButton}>Activate alerts</button>
          </div>
        </div>

        <div className={styles.gridWrapper}>
          <ProductGrid products={saleProducts} />
        </div>
      </section>
    </main>
  );
}