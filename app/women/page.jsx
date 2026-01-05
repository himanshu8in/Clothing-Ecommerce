import ProductGrid from "@/components/ProductGrid";
import styles from "./women.module.css";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

const heroStats = [
  { label: "Runway inspired edits", value: "14" },
  { label: "Silk & satin blends", value: "22" },
  { label: "Bespoke appointments", value: "48 hr" },
];

const silhouetteFilters = ["Evening", "Ready-to-wear", "Bridal", "Resort"];
const fabricFilters = ["Satin", "Organza", "Chiffon", "Knit"];
const paletteFilters = ["Quartz", "Champagne", "Obsidian", "Ultraviolet"];

export default async function WomenPage() {
  const products = await getProducts();
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );

  return (
    <main className={styles.main}>
      <div className={styles.glowLayer}>
        <div className={styles.glowPrimary} />
        <div className={styles.glowSecondary} />
      </div>

      <section className={styles.section}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.heroTag}>Atelier Muse 2026</p>
            <h1 className={styles.heroTitle}>
              Sculpted silhouettes,{" "}
              <span className={styles.heroAccent}>luminous textiles</span>
            </h1>
            <p className={styles.heroBody}>
              Dresses, tailoring, knitwear, and accessories hand-finished with
              bias drapes, corsetry interiors, and couture-inspired detailing.
            </p>
            <div className={styles.heroStats}>
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infoPanel}>
            <div className={styles.infoBadge} />
            <div className={styles.infoStack}>
              <div className={`${styles.infoCard} ${styles.cardRose}`}>
                <p className={styles.infoEyebrow}>Fitting concierge</p>
                <p className={styles.infoTitle}>3D drape preview</p>
                <p className={styles.infoCopy}>
                  Digitally visualize each garment with custom measurements.
                </p>
              </div>
              <div className={`${styles.infoCard} ${styles.cardAmber}`}>
                <p className={styles.infoEyebrow}>Textile lab</p>
                <p className={styles.infoTitle}>Bio-silk satin</p>
                <p className={styles.infoCopy}>
                  Plant-based sheen with 30% lighter drape, wrinkle resistant.
                </p>
              </div>
              <div className={`${styles.infoCard} ${styles.cardFuchsia}`}>
                <p className={styles.infoEyebrow}>Palette</p>
                <p className={styles.infoTitle}>Desert Mirage</p>
                <p className={styles.infoCopy}>
                  Rose quartz, copper, champagne, obsidian, ultraviolet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.refineTray}>
          <div>
            <p className={styles.trayLabel}>Silhouette</p>
            <div className={styles.trayChips}>
              {silhouetteFilters.map((filter) => (
                <button key={filter} type="button" className={styles.trayChipButton}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.trayGrid}>
            <div>
              <p className={styles.trayLabel}>Fabric story</p>
              <div className={styles.trayTags}>
                {fabricFilters.map((filter) => (
                  <button key={filter} type="button" className={styles.trayTagButton}>
                    <span className={styles.tagDot} />
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className={styles.trayLabel}>Palette</p>
              <div className={styles.paletteRow}>
                {paletteFilters.map((tone) => (
                  <button key={tone} type="button" className={styles.paletteChip}>
                    <span className={styles.paletteSwatch} data-tone={tone} />
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className={styles.portfolioHeader}>
          <div>
            <p className={styles.portfolioEyebrow}>Portfolio</p>
            <h2 className={styles.portfolioTitle}>Womenswear edit</h2>
          </div>
          <div className={styles.portfolioActions}>
            <button className={styles.actionButton}>Sort: Couture</button>
            <button className={styles.actionButton}>View lookbook</button>
          </div>
        </div>

        <div className={styles.gridWrapper}>
          <ProductGrid products={womenProducts} />
        </div>
      </section>
    </main>
  );
}
