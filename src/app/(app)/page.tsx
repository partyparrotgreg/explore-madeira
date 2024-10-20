import { LogoMadeiraExplore } from "@/assets/brand/LogoMadeiraExplore";
import { MadeiraMap } from "@/components/maps/MadeiraMap";
import { LocationCard } from "@/components/shared/location-card";
import { PhotoAuthor } from "@/components/shared/photo-author";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations } from "@/lib/locations";
import { regions } from "@/lib/regions";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative isolate">
        <div className="aspect-square lg:aspect-[16/6] overflow-hidden relative  rounded-3xl">
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-start pt-24 z-50">
            <LogoMadeiraExplore className="h-24 filter brightness-[500]" />
            <p className="text-white text-2xl font-bold max-w-96 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
        <div className="p-4 bg-background rounded-2xl absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-50">
          <Input placeholder="Search..." className="min-w-64" />{" "}
          <Button>Search</Button>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-8">
        <h2>Regions</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {regions.map(({ id, slug, name, description, image }) => (
              <Link
                key={id}
                href={`/regions/${slug}`}
                className="block p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 bg-card"
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
          <div className="bg-card p-12 rounded-2xl">
            <MadeiraMap region={null} />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-8">
        <div className="flex flex-row justify-between items-center">
          <h2>Calheta</h2>
          <Button variant={"ghost"}>
            Browse{" "}
            <Badge variant={"secondary"} className="ml-2">
              10
            </Badge>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link href={`/location/${location.slug}`} key={location.id}>
              <LocationCard location={location} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
