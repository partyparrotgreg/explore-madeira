import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IPhotoAuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  author?: string;
  image?: string;
}

export const PhotoAuthor = ({ author, image, ...props }: IPhotoAuthorProps) => {
  const initials = author
    ?.split(" ")
    .map((name) => name[0])
    .join("");

  const classes = cn(
    "absolute items-center justify-center rounded-full bg-background p-1 m-3 text-xs bottom-0 flex flex-row z-[1]",
    props.className
  );
  return (
    <div {...props} className={classes}>
      <Avatar className="w-6 rounded-full overflow-hidden h-6">
        <AvatarImage src={image ?? "https://github.com/shadcn.png"} />
        <AvatarFallback>{initials ?? "CN"}</AvatarFallback>
      </Avatar>{" "}
      <span className="mx-2">{author ?? "Author"}</span>
    </div>
  );
};
