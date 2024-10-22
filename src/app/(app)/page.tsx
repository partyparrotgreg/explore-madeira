import { BlockLocations } from "@/components/blocks/block-locations";
import { PhotoAuthor } from "@/components/shared/photo-author";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RegionsSection } from "./_sections/RegionsSection";
export default async function Home() {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative isolate -mx-3 md:mx-0">
        <div className="aspect-square lg:aspect-[16/6] overflow-hidden relative rounded-3xl">
          <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center z-50">
            <h1 className="text-white">Welcome to Madeira Island</h1>
            <p className="text-white text-2xl font-medium max-w-96 text-center">
              &mdash; The land of the wild bunnies 🐰
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
        <div className="md:p-4 mt-6 md:mt-0 bg-background rounded-2xl md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 flex flex-row gap-2 z-50">
          <Input placeholder="Search..." className="min-w-64" />{" "}
          <Button>Search</Button>
        </div>
      </section>
      <RegionsSection />
      <section className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <h2>Calheta</h2>
          <Button variant={"ghost"}>
            Browse{" "}
            <Badge variant={"secondary"} className="ml-2">
              10
            </Badge>
          </Button>
        </div>
        <BlockLocations />
      </section>
    </main>
  );
}
