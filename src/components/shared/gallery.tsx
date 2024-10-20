"use client";

import { gallery } from "@/lib/gallery";
import { GalleryCard } from "./gallery-card";

export const Gallery = () => {
  return (
    <section className="mt-16">
      <div className="image-container">
        {gallery.map((image, index) => (
          <GalleryCard image={image} key={index} title={""} description={""} />
        ))}
      </div>
    </section>
  );
};
