import { Button } from "@/components/ui/button";
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

  return (
    <main className="flex flex-col">
      <header className="px-8">
        <Link href="/regions" className="text-2xl font-bold">
          <Button>Back</Button>
        </Link>
        <h1>{name}</h1>
        <p>{description}</p>
      </header>
    </main>
  );
}
