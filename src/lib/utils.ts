import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL() {
  // TODO: rename to STARPI_URL
  return process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
}