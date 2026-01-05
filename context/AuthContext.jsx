"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "fs_users";
const SESSION_KEY = "fs_session";

const AuthContext = createContext();

function readUsers() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    console.error("Failed to parse users", error);
    return [];
  }
}

function persistUsers(users) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      const parsed = JSON.parse(session);
      setUser(parsed);
    }
  }, []);

  const login = async (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const existing = users.find((u) => u.email === trimmedEmail);

    if (!existing) {
      return { success: false, message: "No account found. Please sign up." };
    }

    if (existing.password !== password) {
      return { success: false, message: "Incorrect password. Try again." };
    }

    const profileName = existing.name || trimmedEmail.split("@")[0];
    const sessionUser = { email: trimmedEmail, name: profileName };
    setUser(sessionUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    router.push("/profile");
    return { success: true };
  };

  const signup = async ({ email, password, name }) => {
    const trimmedEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (users.find((u) => u.email === trimmedEmail)) {
      return { success: false, message: "Account already exists. Please login." };
    }

    const profileName = name?.trim() || trimmedEmail.split("@")[0];
    const nextUsers = [...users, { email: trimmedEmail, password, name: profileName }];
    persistUsers(nextUsers);
    return { success: true };
  };

  const resetPassword = async (email) => {
    const trimmedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const existing = users.find((u) => u.email === trimmedEmail);
    if (!existing) {
      return { success: false, message: "No account found with that email." };
    }
    return {
      success: true,
      message: "Reset link sent! (Simulated) Check your inbox.",
    };
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(SESSION_KEY);
    }
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
