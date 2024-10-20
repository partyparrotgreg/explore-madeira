"use client";

import { MadeiraMap } from "@/components/maps/MadeiraMap";
import { regions } from "@/lib/regions";
import { RegionType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const RegionsSection = () => {
  const [selectedRegion, setSelectedRegion] = useState<
    RegionType["slug"] | null
  >(null);
  return (
    <section className="flex flex-col gap-8">
      <h2>Regions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map(({ id, slug, name, description, image }) => (
            <Link
              key={id}
              href={`/regions/${slug}`}
              className="block p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 bg-card"
              onMouseOver={() => setSelectedRegion(slug)}
              onMouseLeave={() => setSelectedRegion(null)}
            >
              <div className="flex flex-col justify-between h-full gap-8">
                <Image src={image} alt={name} width={64} />
                <div>
                  <h5 className="font-medium text-lg">{name}</h5>
                  <p className="text-sm text-foreground/75 line-clamp-3">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex-col gap-4 hidden md:flex">
          <div className="sticky top-4 z-50">
            <MadeiraMap region={selectedRegion} regions={regions} />
          </div>
        </div>
      </div>
    </section>
  );
};
