import { PhotoAuthor } from "@/components/shared/photo-author";
import { Badge } from "@/components/ui/badge";
import { regions } from "@/lib/regions";
import Image from "next/image";
import { DemoArticle } from "../../news/_components/demo-article";
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
    <main className="flex flex-col">
      <section className="relative isolate mb-6">
        <div className="aspect-square lg:aspect-[16/9] overflow-hidden relative  rounded-3xl">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-50 text-white">
            <Badge>{name}</Badge>
            <h1 className="text-7xl font-bold">Charming {name}</h1>
            <p className="text-xl">{description}</p>
            <p>
              by <span className="font-bold">{author?.name}</span> | 5 days ago
            </p>
          </div>
          <div className="bg-gradient-to-b from-black/50 to-black/0 absolute top-0 h-full z-20 w-full" />
          <PhotoAuthor author="Author" image="https://github.com/shadcn.png" />
          <Image
            priority
            src={
              "https://images.unsplash.com/photo-1636964518395-ef7b9eb1cbb5?q=80&w=4025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            layout="fill"
            className="absolute bottom-0"
            alt="Porto Moniz"
          />
        </div>
      </section>
      <DemoArticle />
    </main>
  );
}
