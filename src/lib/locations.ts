import { useMemo } from "react";

export type LocationType = {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  region: string;
  type: "hike" | "bar" | "viewpoint";
};

export const locations: LocationType[] = [
  {
    id: "1",
    name: "PR1: Vereda do Pico do Areeiro (Pico do Areeiro-Pico Ruivo)",
    description: "Pico do Areeiro",
    image:
      "https://images.unsplash.com/photo-1585173847038-1cfe1954c10a?q=80&w=5080&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "pr1-pico-do-areeiro",
    region: "Santana",
    type: "hike",
  },
  {
    id: "2",
    name: "PR1.1: Vereda da Ilha (Pico Ruivo –Ilha)",
    description: "Pico do Areeiro",
    image:
      "https://images.unsplash.com/photo-1585173847038-1cfe1954c10a?q=80&w=5080&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "pr2-pico-do-areeiro",
    region: "Santana",
    type: "bar",
  },
  {
    id: "3",
    name: "PR1.2: Vereda do Pico Ruivo (Achada do Teixeira - Pico Ruivo)",
    description: "Pico do Areeiro",
    image:
      "https://images.unsplash.com/photo-1585173847038-1cfe1954c10a?q=80&w=5080&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "pr3-pico-do-areeiro",
    region: "Santana",
    type: "hike",
  },
  {
    id: "4",
    name: "PR 1.3: Vereda da Encumeada (Pico Ruivo -Encumeada)",
    description: "Pico do Areeiro",
    image:
      "https://images.unsplash.com/photo-1585173847038-1cfe1954c10a?q=80&w=5080&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "pr4-pico-do-areeiro",
    region: "Ribeira Brava",
    type: "hike",
  },
];

export const useLocations = () => {
  const location = (slug: string) => locations.find((loc) => loc.slug === slug);
  const locationsList = useMemo(() => {
    return locations;
  }, []);
  return { location, locationsList };
};
