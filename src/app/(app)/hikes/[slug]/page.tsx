import { GalleryCard } from "@/components/shared/gallery-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLocations } from "@/lib/locations";
import { useRegions } from "@/lib/regions";
import { RegionBadge } from "../../regions/_components/RegionsMap";

export default async function HikePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const regions = useRegions();
  const { location } = useLocations();
  const place = location(slug);
  if (!place) return <div>Place not found</div>;
  const region = regions.find((region) => region.slug === "calheta");

  return (
    <main className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-8 relative">
        <div className="col-span-2 flex flex-col gap-4">
          <header>
            <h1 className="text-3xl">{place.name}</h1>
            {region && (
              <RegionBadge
                slug={region?.slug}
                name={region?.name}
                color={region?.color}
              />
            )}
          </header>
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-3xl rounded-3xl rounded-b-none p-6 flex flex-row gap-4 justify-between absolute z-10 left-0 right-0 top-0">
              {Array.from([
                { label: "Duration", value: "2h 45m" },
                {
                  label: "Distance",
                  value: "10km",
                },
                {
                  label: "Elevation",
                  value: "1000m",
                },
                {
                  label: "Difficulty",
                  value: "Easy",
                },
              ]).map(({ label, value }, index) => (
                <>
                  <div className="w-full" key={index}>
                    <h5>{value}</h5>
                    <small>{label}</small>
                  </div>
                  {index !== 4 - 1 && <Separator orientation="vertical" />}
                </>
              ))}
            </div>
            <GalleryCard
              image="https://images.unsplash.com/photo-1636964518395-ef7b9eb1cbb5?q=80&w=4025&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Title"
            />
          </div>
          <article className="article">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              optio culpa laboriosam incidunt eveniet quis animi asperiores esse
              magnam quod molestias eligendi nesciunt sequi, repellat beatae
              impedit quasi doloribus magni?
            </p>
          </article>
        </div>
        <aside className="flex flex-col gap-2">
          <div>
            <Button>Share</Button>
            <Button>Add to list</Button>
          </div>
          <div className="bg-card rounded-3xl p-6">starting point</div>
          <div className="bg-card rounded-3xl p-6">starting point</div>
          <div className="bg-card rounded-3xl p-6">starting point</div>
          <div className="bg-card rounded-3xl p-6">starting point</div>
        </aside>
      </div>
    </main>
  );
}
