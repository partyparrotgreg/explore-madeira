import { Button } from "@/components/ui/button";
import { regions } from "@/lib/regions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { RegionsMap } from "./_components/RegionsMap";

export default function RegionsPage() {
  const regionsByName = regions.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <main className="flex flex-col gap-8">
      <RegionsMap regions={regions} />
      <section className="flex flex-col gap-12 px-8 lg:px-0">
        <div className="grid grid-cols-3 gap-12">
          {regionsByName.map(({ slug, name, description }) => (
            <Link
              key={slug}
              href={`/regions/${slug}`}
              className={cn(
                "block overflow-hidden  rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 bg-card"
              )}
            >
              <div className="aspect-video overflow-hidden w-full relative">
                <Image
                  priority
                  src={
                    "https://images.unsplash.com/photo-1636964518395-ef7b9eb1cbb5?q=80&w=4025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  layout="fill"
                  alt={name}
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6">
                <div>
                  <h5 className="font-medium text-lg">{name}</h5>
                  <p className="text-sm text-foreground/75 line-clamp-3">
                    {description}
                  </p>
                  <div className="flex flex-row gap-2 mt-6">
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
