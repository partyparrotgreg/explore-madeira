import { HomeIcon, MapIcon, NewspaperIcon } from "lucide-react";
import { NavType } from "./types";

export const nav: NavType[] = [
  {
    slug: "home",
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    slug: "regions",
    title: "Regions",
    href: "/regions",
    icon: MapIcon,
  },
  {
    slug: "news",
    title: "News",
    href: "/news",
    icon: NewspaperIcon,
  },
];
