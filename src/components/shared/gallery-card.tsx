import { cn } from "@/lib/utils";
import Image from "next/image";
import { PhotoAuthor } from "./photo-author";

interface GalleryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
}

export const GalleryCard = ({ image, title, ...props }: GalleryCardProps) => {
  const classes = cn(
    "overflow-hidden rounded-3xl mb-8 relative group isolate",
    props.className
  );
  return (
    <div className={classes} {...props}>
      <PhotoAuthor />
      <Image
        src={image}
        alt={title}
        width={1200}
        height={1200}
        className="group-hover:scale-105 transition-all duration-500"
      />
    </div>
  );
};
