"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import { products } from "@/lib/product";
import styles from "./product.module.css";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const params = useParams();

  const staticProduct = useMemo(
    () => products.find((item) => item.id === params.id),
    [params.id]
  );

  useEffect(() => {
    if (staticProduct) {
      setProduct(staticProduct);
      setError(null);
      return;
    }

    async function getProduct() {
      try {
        const res = await fetch(`/api/products?id=${params.id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status}`);
        }

        const data = await res.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      }
    }

    if (params.id) {
      getProduct();
    }
  }, [params.id, staticProduct]);

  if (error || !product) {
    return <h2 className="text-center py-20">Product not found</h2>;
  }

  return (
    <section className={styles.pageShell}>
      <div className={styles.galleryCard}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
      </div>

      <div className={styles.detailCard}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>₹{product.price}</p>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span>Delivery</span>
            <p>2-4 working days</p>
          </div>
          <div className={styles.metaItem}>
            <span>Returns</span>
            <p>Free within 14 days</p>
          </div>
          <div className={styles.metaItem}>
            <span>Care</span>
            <p>Dry clean preferred</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.addButton} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
