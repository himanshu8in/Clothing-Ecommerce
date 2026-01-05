"use client";

import Image from "next/image";
import ProtectedRoute from "@/components/ProtectRoute";
import { useCart } from "@/context/CartContext";
import styles from "./cart.module.css";

function CartContent() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className={styles.emptyState}>Your cart is empty 🛒</h2>;
  }

  return (
    <section className={styles.cartSection}>
      <h1 className={styles.cartTitle}>Your Cart</h1>

      <div className={styles.cartList}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartRow}>
            <div className={styles.thumbWrapper}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className={styles.thumb}
                />
              ) : (
                <div className={styles.thumbPlaceholder}>
                  <span>{item.name.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className={styles.itemInfo}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemMeta}>
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className={styles.rowActions}>
              <p className={styles.rowSubtotal}>₹{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.totalRow}>
        Total: ₹{total}
      </div>

      <button type="button" className={styles.checkoutButton}>
        Proceed to Payment
      </button>
    </section>
  );
}

export default function CartPage() {
  return (
    <ProtectedRoute>
      <CartContent />
    </ProtectedRoute>
  );
}
