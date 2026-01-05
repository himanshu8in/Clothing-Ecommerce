"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import styles from "./Navbar.module.css";

const links = [
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/kids", label: "Kids" },
  { href: "/sale", label: "Sale", sale: true },
];

export default function Navbar() {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const profileInitial = user?.name?.charAt(0)?.toUpperCase() ?? "∘";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          FashionStore
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && <div className={styles.navOverlay} onClick={closeMenu} />}

        <div className={`${styles.navPanel} ${menuOpen ? styles.navPanelOpen : ""}`}>
          <button type="button" className={styles.closeButton} aria-label="Close menu" onClick={closeMenu}>
            ✕
          </button>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${link.sale ? styles.saleLink : ""}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cart" className={`${styles.navLink} ${styles.cartPill}`} onClick={closeMenu}>
                🛒 Cart ({cartItems.length})
              </Link>
            </li>
            <li>
              <Link
                href={user ? "/profile" : "/login"}
                className={`${styles.navLink} ${styles.profilePill}`}
                aria-label={user ? "Go to profile" : "Login"}
                onClick={closeMenu}
              >
                <span className={styles.profileIcon}>{profileInitial}</span>
                <span className={styles.profileLabel}>{user ? "Profile" : "Login"}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
