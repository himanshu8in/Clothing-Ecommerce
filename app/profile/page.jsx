"use client";

import Image from "next/image";
import ProtectedRoute from "@/components/ProtectRoute";
import { useAuth } from "@/context/AuthContext";
import styles from "./profile.module.css";

const mockOrders = [
  {
    id: "ORD-98231",
    date: "Jan 02, 2026",
    total: "₹6,499",
    status: "Delivered",
    items: [
      {
        name: "Aurora Satin Midi",
        image: "/images/women-placeholder-03.jpg",
        price: "₹2,799",
        size: "M",
        color: "Champagne",
      },
      {
        name: "Nomad Stretch Chinos",
        image: "/images/men-placeholder-05.jpg",
        price: "₹3,700",
        size: "32",
        color: "Olive",
      },
    ],
  },
  {
    id: "ORD-97310",
    date: "Dec 18, 2025",
    total: "₹3,199",
    status: "In transit",
    items: [
      {
        name: "Galaxy Graphic Tee",
        image: "/images/kids-placeholder-01.jpg",
        price: "₹1,299",
        size: "8",
        color: "Indigo",
      },
      {
        name: "Peak Trail Jacket",
        image: "/images/sale-placeholder-04.jpg",
        price: "₹1,900",
        size: "L",
        color: "Stone",
      },
    ],
  },
];

const mockWishlist = [
  {
    name: "Vanguard Fleece Hoodie",
    price: "₹2,499",
    image: "/images/men-placeholder-09.jpg",
    badge: "Restocking soon",
  },
  {
    name: "Desert Mirage Gown",
    price: "₹4,899",
    image: "/images/women-placeholder-05.jpg",
    badge: "New drop",
  },
  {
    name: "PlaySwift Active Set",
    price: "₹1,599",
    image: "/images/kids-placeholder-07.jpg",
    badge: "Parents' pick",
  },
];

const mockAddresses = [
  {
    label: "Primary residence",
    recipient: "Kajal Singh",
    phone: "+91 98765 43210",
    address: "House no 10, New Guru Nanak Nagar, 141015, Ludhiana Punjab",
    default: true,
  },
  {
    label: "Studio pickup",
    recipient: "Anju Devi",
    phone: "+91 98765 43210",
    address: "House no 326, Prime City, Landran Road Kharar, Punjab",
    default: false,
  },
];

function DashboardContent() {
  const { user, logout } = useAuth();

  return (
    <div className={styles.pageShell}>
      <section className={styles.heroPanel}>
        <div>
          <p className={styles.kicker}>Member profile</p>
          <h1 className={styles.heroTitle}>Welcome back, {user?.name ?? "Fashion Insider"}</h1>
          <p className={styles.heroCopy}>
            Manage deliveries, wishlist, and loyalty history from one elegant cockpit.
          </p>
        </div>

        <div className={styles.statGrid}>
          <div>
            <p className={styles.statLabel}>Orders completed</p>
            <p className={styles.statValue}>18</p>
          </div>
          <div>
            <p className={styles.statLabel}>Wishlist items</p>
            <p className={styles.statValue}>{mockWishlist.length}</p>
          </div>
          <div>
            <p className={styles.statLabel}>Member tier</p>
            <p className={styles.statValue}>Platinum</p>
          </div>
        </div>

        <button type="button" className={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      </section>

      <section className={styles.gridLayout}>
        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardEyebrow}>Identity</p>
              <h2 className={styles.cardTitle}>User details</h2>
            </div>
            <button type="button" className={styles.editButton}>
              Edit profile
            </button>
          </div>

          <div className={styles.profileBody}>
            <div className={styles.avatarBlock}>
              <div className={styles.avatarCircle}>{user?.name?.charAt(0) ?? "F"}</div>
              <div>
                <p className={styles.profileName}>{user?.name ?? "Fashion Insider"}</p>
                <p className={styles.profileEmail}>{user?.email}</p>
              </div>
            </div>

            <dl className={styles.profileMeta}>
              <div>
                <dt>Phone</dt>
                <dd>+91 98765 43210</dd>
              </div>
              <div>
                <dt>Member since</dt>
                <dd>Oct 2024</dd>
              </div>
              <div>
                <dt>Preferred contact</dt>
                <dd>Email & SMS</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardEyebrow}>Orders</p>
              <h2 className={styles.cardTitle}>Recent activity</h2>
            </div>
            <button type="button" className={styles.editButton}>
              View all
            </button>
          </div>

          <div className={styles.orderList}>
            {mockOrders.map((order) => (
              <article key={order.id} className={styles.orderCard}>
                <header>
                  <p className={styles.orderId}>{order.id}</p>
                  <p className={styles.orderMeta}>{order.date} • {order.status}</p>
                  <p className={styles.orderTotal}>{order.total}</p>
                </header>
                <div className={styles.orderItems}>
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.name}`} className={styles.orderItemRow}>
                      <div className={styles.itemThumb}>
                        <Image src={item.image} alt={item.name} fill sizes="64px" />
                      </div>
                      <div>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemMeta}>
                          {item.price} • {item.size} • {item.color}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardEyebrow}>Wishlist</p>
              <h2 className={styles.cardTitle}>Saved favorites</h2>
            </div>
            <button type="button" className={styles.editButton}>
              Manage wishlist
            </button>
          </div>

          <div className={styles.wishlistGrid}>
            {mockWishlist.map((item) => (
              <article key={item.name} className={styles.wishlistCard}>
                <div className={styles.wishlistThumb}>
                  <Image src={item.image} alt={item.name} fill sizes="160px" />
                </div>
                <div>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemMeta}>{item.price}</p>
                  <span className={styles.itemBadge}>{item.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardEyebrow}>Addresses</p>
              <h2 className={styles.cardTitle}>Saved locations</h2>
            </div>
            <button type="button" className={styles.editButton}>
              Manage addresses
            </button>
          </div>

          <div className={styles.addressGrid}>
            {mockAddresses.map((address) => (
              <article key={address.label} className={styles.addressCard}>
                <header>
                  <p className={styles.addressLabel}>{address.label}</p>
                  {address.default && <span className={styles.addressTag}>Default</span>}
                </header>
                <p className={styles.addressRecipient}>{address.recipient}</p>
                <p className={styles.addressPhone}>{address.phone}</p>
                <p className={styles.addressBody}>{address.address}</p>
                <div className={styles.addressActions}>
                  <button type="button">Edit</button>
                  <button type="button">Set as default</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
