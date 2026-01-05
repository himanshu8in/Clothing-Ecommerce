"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./signup.module.css";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validate = () => {
    if (!fullName.trim()) return "Please enter your name.";
    if (!email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Enter a valid email.";
    if (password.length < 6) return "Password should be at least 6 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationMessage = validate();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setIsSubmitting(true);
    const result = await signup({ email, password, name: fullName });
    setIsSubmitting(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setSuccess("Account created! Redirecting you to login…");
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTimeout(() => router.push("/login"), 1200);
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
            <h1 className={styles.authTitle}>Create Account</h1>
            <p className={styles.authSubtitle}>
              Join the community and unlock member-only drops.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Full name"
              className={styles.input}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className={`${styles.feedback} ${styles.feedbackError}`}>{error}</p>}
            {success && (
              <p className={`${styles.feedback} ${styles.feedbackSuccess}`}>{success}</p>
            )}

            <button className={styles.submit} disabled={isSubmitting}>
              {isSubmitting ? "Creating account…" : "Sign Up"}
            </button>
          </form>

          <p className={styles.switchPrompt}>
            Already have an account?{" "}
            <button type="button" className={styles.linkButton} onClick={() => router.push("/login")}>
              Login
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}
