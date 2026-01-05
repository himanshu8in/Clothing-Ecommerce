"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

const links = [
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/kids", label: "Kids" },
  { href: "/sale", label: "Sale", sale: true },
];

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className={styles.navBar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          FashionStore
        </Link>

        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  link.sale ? styles.saleLink : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/cart" className={`${styles.navLink} ${styles.cartPill}`}>
              🛒 Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
