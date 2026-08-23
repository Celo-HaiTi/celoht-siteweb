"use client";

import { useEffect } from "react";
import { assetPath } from "@/lib/constants";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register(assetPath("/sw.js"), { updateViaCache: "none" }).catch(() => {
      // Registration failing shouldn't break the app  -  it's a progressive
      // enhancement, not a requirement.
    });
  }, []);

  return null;
}
