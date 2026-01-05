import ProductGrid from "@/components/ProductGrid";
import { getBaseUrl } from "@/lib/getBaseUrl";
import styles from "./men.module.css";

async function getProducts() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });
  return res.json();
}

const sizeFilters = ["XS", "S", "M", "L", "XL", "XXL"];
const colorFilters = ["Onyx", "Ivory", "Olive", "Ink", "Clay"];
const editFilters = ["Tailored", "Streetwear", "Essentials", "Footwear", "Outerwear"];

export default async function MenPage() {
  const products = await getProducts();
  const menProducts = products.filter(
    (product) => product.category === "men"
  );

  return (
    <main className={styles.main}>
      <div className={styles.glowLayer}>
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />
      </div>

      <section className={styles.section}>
        <div className={styles.heroCard}>
          <p className={styles.heroTag}>Menswear Capsule 2026</p>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                Edit your wardrobe with{" "}
                <span className={styles.heroAccent}>future classics</span>
              </h1>
              <p className={styles.heroBody}>
                A curated line-up of 20+ silhouettes—tailored separates,
                technical outerwear, minimalist footwear, and accessories
                engineered for movement.
              </p>
              <div className={styles.heroMetrics}>
                <div>
                  <span className={styles.metricValue}>
                    {menProducts.length}
                  </span>
                  pieces
                </div>
                <div>
                  <span className={styles.metricValue}>8</span>
                  fabric techs
                </div>
                <div>
                  <span className={styles.metricValue}>12</span>
                  color stories
                </div>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.panelGrid}>
                <div className={styles.panelCard}>
                  <p className={styles.panelLabel}>Drop</p>
                  <p className={styles.panelValue}>AW-26</p>
                  <p className={styles.panelCopy}>Launches Feb 12</p>
                </div>
                <div className={styles.panelCard}>
                  <p className={styles.panelLabel}>Fabric</p>
                  <p className={styles.panelValue}>Aeronet</p>
                  <p className={styles.panelCopy}>Wrinkle resistant</p>
                </div>
                <div className={`${styles.panelCard} ${styles.panelHighlight}`}>
                  <p className={styles.panelLabel}>Highlight</p>
                  <p className={styles.panelCopy}>
                    Orbital dye process delivers matte gradients that stay vibrant
                    after 100+ washes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.filterStack}>
            <div>
              <p className={styles.filterGroupLabel}>Edit focus</p>
              <div className={styles.filterGroup}>
                {editFilters.map((tag) => (
                  <button key={tag} type="button" className={styles.filterButton}>
                    <span className={styles.filterDot} />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.refinePanel}>
              <div>
                <p className={styles.filterGroupLabel}>Size</p>
                <div className={styles.chipRow}>
                  {sizeFilters.map((size) => (
                    <button key={size} type="button" className={styles.chipButton}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className={styles.filterGroupLabel}>Color tone</p>
                <div className={styles.colorRow}>
                  {colorFilters.map((shade) => (
                    <button key={shade} type="button" className={styles.colorChip}>
                      <span className={styles.colorSwatch} data-tone={shade} />
                      {shade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <div>
            <p className={styles.catalogEyebrow}>Catalog</p>
            <h2 className={styles.catalogTitle}>Menswear Roster</h2>
          </div>
          <button className={styles.catalogAction}>Sort: Featured</button>
        </div>

        <div className={styles.gridCard}>
          <ProductGrid products={menProducts} />
        </div>
      </section>
    </main>
  );
}
