import { Badge } from "@/components/ui/badge";
import { AuthorType } from "@/lib/types";
import Image from "next/image";
import { PhotoAuthor } from "../shared/photo-author";

interface BlockHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  blurb?: string;
  author?: AuthorType;
}

export const BlockHero = ({
  title,
  blurb,
  author,
  ...props
}: BlockHeroProps) => {
  return (
    <section className="relative isolate" {...props}>
      <div className="aspect-square lg:aspect-[16/9] overflow-hidden relative  rounded-3xl">
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-50 text-white">
          <Badge>Region</Badge>
          <h1 className="text-7xl font-bold">{title}</h1>
          <p className="text-xl">{blurb}</p>
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
  );
};
