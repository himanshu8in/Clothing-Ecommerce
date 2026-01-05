import { headers } from "next/headers";

export function getBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (typeof window === "undefined") {
    const hdrs = headers();
    const host = hdrs.get("x-forwarded-host") || hdrs.get("host") || process.env.VERCEL_URL;
    const protocol = hdrs.get("x-forwarded-proto") || "https";
    if (host) {
      return `${protocol}://${host}`.replace(/\/$/, "");
    }
    return "http://localhost:3000";
  }

  return window.location.origin.replace(/\/$/, "");
}
