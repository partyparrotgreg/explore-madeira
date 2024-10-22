import { Button } from "@/components/ui/button";
import { useRegions } from "@/hooks/use-regions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { RegionsMap } from "./_components/RegionsMap";

export default function RegionsPage() {
  const regions = useRegions();

  return (
    <main className="flex flex-col gap-8">
      <RegionsMap regions={regions} />
      <section className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {regions.map(({ slug, name, description, coat }) => (
            <Link
              key={slug}
              href={`/regions/${slug}`}
              className={cn(
                "block overflow-hidden  rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 bg-card group isolate"
              )}
            >
              <div className="aspect-video overflow-hidden w-full relative">
                {coat && (
                  <div className="absolute z-20 right-4 top-4">
                    <Image src={coat} alt={name} width={64} />
                  </div>
                )}
                <h3 className="text-2xl font-bold absolute top-4 left-4 z-20 text-background">
                  {name}
                </h3>
                <div className="bg-gradient-to-b from-foreground/35 to-foreground/0 absolute top-0 h-1/2 z-10 w-full" />
                <Image
                  priority
                  src={
                    "https://images.unsplash.com/photo-1636964518395-ef7b9eb1cbb5?q=80&w=4025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  layout="fill"
                  className="group-hover:scale-105 transition-all duration-500"
                  alt={name}
                />
              </div>
              <div className="flex flex-col gap-8 p-6 min-h-48 justify-between">
                <p className="text-foreground/75">{description}</p>
                <div className="flex flex-row gap-2 ">
                  <Button size={"sm"} variant={"outline"}>
                    Places
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Hikes
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Events
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
