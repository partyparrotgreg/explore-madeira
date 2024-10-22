import { Separator } from "@/components/ui/separator";
import { regions } from "@/lib/regions";
import Link from "next/link";
const getRegion = async (slug: string) => {
  return await regions.find((region) => region.slug === slug);
};

export default async function RegionPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const region = await getRegion(slug);
  if (!region) return <div>Region not found</div>;
  const { name, description } = region;
  const author = {
    name: "Author Name",
    image: "https://github.com/shadcn.png",
  };
  return (
    <main className="flex flex-col gap-8 pt-8">
      <section className="flex flex-row gap-8">
        <div className="w-56">
          <h5 className="mb-8">Regions</h5>
          {regions.map(({ name, color, slug }) => {
            return (
              <Link
                href={`/regions/${slug}`}
                className="flex flex-row items-center justify-start hover:cursor-pointer py-1 px-2 hover:bg-background rounded-full"
                key={slug}
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-3 w-3 rounded-full"
                />
                <div className="text-sm font-medium px-2">{name}</div>
              </Link>
            );
          })}
        </div>
        <article className="flex flex-col gap-8">
          <h1>{name}</h1>
          <p>{description}</p>

          <h2>News</h2>
          <Separator />
          <h2>Places</h2>
          <Separator />
          <h2>Hikes</h2>
          <Separator />
        </article>
      </section>
    </main>
  );
}
