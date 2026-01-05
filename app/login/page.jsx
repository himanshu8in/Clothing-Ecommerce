"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <main className={styles.main}>
      <div className={styles.glowLayer}>
        <div className={`${styles.glow} ${styles.glowOne}`} />
        <div className={`${styles.glow} ${styles.glowTwo}`} />
      </div>

      <div className={styles.authShell}>
        <section className={styles.authSection}>
          <div>
            <h1 className={styles.authTitle}>Login</h1>
            <p className={styles.authSubtitle}>
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className={styles.submit}>Login</button>
          </form>

          <p className={styles.authSubtitle}>
            No account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className={styles.submit}
              style={{ marginTop: 0 }}
            >
              Sign Up
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}
