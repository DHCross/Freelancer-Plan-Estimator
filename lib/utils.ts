import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export function formatCurrency(value: number) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

// Local-storage helpers (simple, non-secure persistence for internal edits)
export function loadOverrides(): Record<string, any> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("hoskbrew_overrides");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveOverrides(overrides: Record<string, any>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem("hoskbrew_overrides", JSON.stringify(overrides));
  } catch {
    /* noop */
  }
}

export function getProjectOverride(projectId: number) {
  const overrides = loadOverrides();
  return overrides[projectId] ?? null;
}

export function setProjectOverride(projectId: number, patch: Record<string, any>) {
  const overrides = loadOverrides();
  overrides[projectId] = { ...(overrides[projectId] ?? {}), ...patch };
  saveOverrides(overrides);
  return overrides[projectId];
}

export function loadPublished(): Record<string, any> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("hoskbrew_published");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePublished(published: Record<string, any>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem("hoskbrew_published", JSON.stringify(published));
  } catch {
    /* noop */
  }
}

export function getPublished(projectId: number) {
  const published = loadPublished();
  return published[projectId] ?? null;
}

export function setPublished(projectId: number, patch: Record<string, any>) {
  const published = loadPublished();
  published[projectId] = { ...(published[projectId] ?? {}), ...patch };
  savePublished(published);
  return published[projectId];
}

export function getQuarterLabel(dateStr: string) {
  try {
    const d = new Date(dateStr);
    const q = Math.floor(d.getMonth() / 3) + 1;
    const y = d.getFullYear();
    return `Q${q} ${y}`;
  } catch {
    return dateStr;
  }
}
