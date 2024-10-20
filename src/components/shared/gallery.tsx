"use client";

import { gallery } from "@/lib/gallery";
import Image from "next/image";
import { PhotoAuthor } from "./photo-author";

export const Gallery = () => {
  return (
    <section className="mt-16">
      <div className="image-container">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 overflow-hidden rounded-3xl mb-8 relative group"
          >
            <PhotoAuthor />
            <Image
              src={image}
              alt="image"
              width={600}
              height={600}
              className="group-hover:scale-105 transition-all duration-500 "
            />
          </div>
        ))}
      </div>
    </section>
  );
};
