import { DemoArticle } from "@/app/(app)/news/_components/demo-article";
import { BlockHero } from "@/components/blocks/block-hero";

export default async function Home() {
  const author = {
    name: "Author Name",
    image: "https://github.com/shadcn.png",
  };
  return (
    <main>
      <BlockHero
        title="Welcome to My Blog!"
        author={author}
        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra velit ut velit fermentum, in tincidunt libero luctus."
      />
      <DemoArticle />
    </main>
  );
}
