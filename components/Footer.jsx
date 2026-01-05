import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Sale", href: "/sale" },
];
const supportLinks = ["Shipping & Returns", "Track Order", "Size Guide", "Gift Cards"];
const contactInfo = [
  { label: "Email", value: "support@fashionstore.com" },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "Hours", value: "Mon-Sat, 9 AM - 9 PM" },
];
const socialIcons = [
  { name: "Instagram", Icon: InstagramIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Pinterest", Icon: PinterestIcon },
  { name: "YouTube", Icon: YoutubeIcon },
];

const paymentIcons = [
  { name: "Visa", Icon: VisaIcon },
  { name: "Mastercard", Icon: MastercardIcon },
  { name: "Amex", Icon: AmexIcon },
  { name: "UPI", Icon: UpiIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topGrid}>
        <div className={styles.brand}>
          <div className={styles.logoBadge}>FS</div>
          <div>
            <h3 className={styles.brandTitle}>FashionStore</h3>
            <p className={styles.brandCopy}>
              Elevated essentials and statement pieces curated for every wardrobe. Discover luxury
              detailing, innovative fabrics, and timeless silhouettes.
            </p>
          </div>
        </div>

        <div>
          <p className={styles.sectionTitle}>Quick Links</p>
          <div className={styles.linkList}>
            {quickLinks.map((item) => (
              <a key={item.label} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.sectionTitle}>Support</p>
          <div className={styles.linkList}>
            {supportLinks.map((item) => (
              <a key={item} href="#" className={styles.link}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.sectionTitle}>Contact</p>
          <div className={styles.contactList}>
            {contactInfo.map((info) => (
              <span key={info.label}>
                <strong>{info.label}:</strong> {info.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.newsletterRow}>
        <div className={styles.newsletterCard}>
          <p>Join our insider list for early access to launches, private events, and exclusive drops.</p>
          <form className={styles.newsletterForm}>
            <input className={styles.newsletterInput} type="email" placeholder="Email address" />
            <button type="button" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <p className={styles.sectionTitle}>Social</p>
          <div className={styles.iconCluster}>
            {socialIcons.map(({ name, Icon }) => (
              <button key={name} className={styles.iconButton} aria-label={name} type="button">
                <Icon />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.sectionTitle}>Payments</p>
          <div className={styles.iconCluster}>
            {paymentIcons.map(({ name, Icon }) => (
              <div key={name} className={styles.paymentIcon} aria-label={name}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>© 2026 FashionStore. All rights reserved.</div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="7" fill="url(#igGradient)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.2" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="7" fill="#1877f2" />
      <path
        d="M15.5 8.5H13.6C13 8.5 12.8 8.8 12.8 9.3v1.3h2.6l-.3 2.3h-2.3v7.2h-2.5v-7.2H8.5v-2.3h1.8V9c0-2 1.1-3.5 3.6-3.5h1.6v3z"
        fill="#fff"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="7" fill="#e60023" />
      <path
        d="M12 6.8c-2.9 0-4.4 2.1-4.4 3.9 0 1.1.4 2.1 1.3 2.4.1 0 .1 0 .2-.1.1-.4.4-1.6.4-1.9 0-.2-.1-.4-.1-.6-.1-.3.2-.6.5-.6.7 0 1.2.8 1.2 1.9 0 1-.7 2.5-1.1 3.9-.3 1.1.6 2 1.5 2 .9 0 1.5-.3 2-1.2.5-.9.7-2 .7-3.1 0-1.3-.5-2.3-1.6-2.3-.7 0-1.2.5-1.2 1.2 0 .5.2.9.2 1.4-.4 1.5-.7 1.8-1.1 1.8-.4 0-.6-.4-.5-.8.1-.6.4-1.4.6-2.1.2-.7.1-1-.4-1.6-.2-.2-.2-.4 0-.6.3-.4.9-.9 2-.9 1.5 0 2.6 1.1 2.6 3 0 1.7-.7 3.7-2 4.4-.4.2-.6.5-.6.9v1.3"
        fill="#fff"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="7" fill="#ff0000" />
      <path d="M10 9.5l4.5 2.5L10 14.5z" fill="#fff" />
      <rect
        x="5"
        y="8"
        width="14"
        height="8"
        rx="3"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 24" aria-hidden="true">
      <rect width="48" height="24" rx="8" fill="#0a1f44" />
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#f5f5f5"
        fontWeight="700"
        fontSize="11"
        fontFamily="'Segoe UI', sans-serif"
      >
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 24" aria-hidden="true">
      <rect width="48" height="24" rx="8" fill="#101828" />
      <circle cx="21" cy="12" r="6.5" fill="#ff5f00" />
      <circle cx="27" cy="12" r="6.5" fill="#eb001b" fillOpacity="0.85" />
      <circle cx="24" cy="12" r="6.5" fill="#f79e1b" fillOpacity="0.85" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg viewBox="0 0 48 24" aria-hidden="true">
      <rect width="48" height="24" rx="8" fill="#2e77bb" />
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#fff"
        fontWeight="700"
        fontSize="10"
        fontFamily="'Segoe UI', sans-serif"
      >
        AMEX
      </text>
    </svg>
  );
}

function UpiIcon() {
  return (
    <svg viewBox="0 0 48 24" aria-hidden="true">
      <rect width="48" height="24" rx="8" fill="#0f172a" />
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill="#22c55e"
        fontWeight="700"
        fontSize="11"
        fontFamily="'Segoe UI', sans-serif"
      >
        UPI
      </text>
    </svg>
  );
}
