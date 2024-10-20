import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type AuthorType = {
  name: string;
  image?: string;
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
};