import { locations } from "@/lib/locations";
import Link from "next/link";
import { LocationCard } from "../shared/location-card";

export const BlockLocations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {locations.map((location) => (
        <Link href={`/location/${location.slug}`} key={location.id}>
          <LocationCard location={location} />
        </Link>
      ))}
    </div>
  );
};
