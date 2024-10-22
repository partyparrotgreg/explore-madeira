import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ElementType } from "react";

export type AuthorType = {
  name: string;
  image?: string;
};

export type NavType = {
  slug: string;
  title: string;
  href: string;
  icon: ElementType;
};

export type RegionType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | StaticImport;
  color: string;
  path?: string;
  order: number;
  coat?: string | StaticImport;
};
