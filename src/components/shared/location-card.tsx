import { gallery } from "@/lib/gallery";
import { LocationType } from "@/lib/locations";
import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ILocationProps extends React.HTMLAttributes<HTMLDivElement> {
  location: LocationType;
}
export const LocationCard = ({ location }: ILocationProps) => {
  const { name, description } = location;
  return (
    <div className="group mb-8 isolate">
      <div className="aspect-video relative overflow-hidden w-full rounded-2xl">
        <div className="absolute z-50 p-4 flex flex-row justify-between items-start w-full">
          <Badge>Hiking</Badge>
          <Button size={"icon"}>
            <BookmarkIcon />
          </Button>
        </div>
        <Image
          src={gallery[3]}
          alt="image"
          width={600}
          height={600}
          className="group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="py-4">
        <div className="font-medium text-xl">{name}</div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
