"use client";

import { MadeiraMap } from "@/components/maps/MadeiraMap";
import { RegionType } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegionsMap = ({ regions }: { regions: RegionType[] }) => {
  const [selectedRegion, setSelectedRegion] = useState<
    RegionType["slug"] | null
  >(null);
  const router = useRouter();
  const handleClick = (slug: string) => {
    router.push(`/regions/${slug}`);
  };

  return (
    <section>
      <div className="bg-card p-12 rounded-3xl relative">
        <div className="absolute bottom-0 left-0 p-4">
          {regions.map(({ name, color, slug }) => {
            return (
              <div
                className="flex flex-row items-center justify-start hover:cursor-pointer py-1 px-2 hover:bg-background rounded-full"
                onMouseEnter={() => setSelectedRegion(slug)}
                onMouseLeave={() => setSelectedRegion(null)}
                onClick={() => handleClick(slug)}
                key={slug}
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-3 w-3 rounded-full"
                />
                <div className="text-sm font-medium px-2">{name}</div>
              </div>
            );
          })}
        </div>
        <MadeiraMap region={selectedRegion} regions={regions} />
      </div>
    </section>
  );
};
