import { BlockLocations } from "@/components/blocks/block-locations";
import { GalleryCard } from "@/components/shared/gallery-card";
import { PhotoAuthor } from "@/components/shared/photo-author";
import { gallery } from "@/lib/gallery";
import { Gallery } from "../../../../components/shared/gallery";

interface DemoArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  blurb?: string;
}

export const DemoArticle = ({ title, blurb, ...props }: DemoArticleProps) => {
  return (
    <main className="flex flex-col gap-8" {...props}>
      <article className="col-span-2 mx-auto max-w-screen-lg flex flex-col gap-8 article pt-8">
        <h1 className="text-center">
          {title ?? "Welcome to My Blog asdasd !"}
        </h1>
        <PhotoAuthor className="relative bg-card inline-flex self-center" />
        {blurb && <p>{blurb}</p>}

        <p>
          This post demonstrates all the <strong>typography elements</strong>{" "}
          you might need when writing a blog post. Whether you’re talking about{" "}
          <em>code snippets</em>, quoting someone famous, or creating bullet
          lists, we’ve got you covered!
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sed
          cupiditate est minus fugiat praesentium dolores quam pariatur tenetur!
          Illo eos, temporibus facilis officiis necessitatibus voluptatem
          suscipit deleniti velit. Facilis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Blanditiis alias qui quaerat repellat!
          Incidunt provident culpa maiores tenetur consequuntur, accusantium
          nemo laudantium, harum quis perferendis a temporibus cumque
          voluptatibus quas!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sed
          cupiditate est minus fugiat praesentium dolores quam pariatur tenetur!
          Illo eos, <a href="/">temporibus</a> facilis officiis necessitatibus
          voluptatem suscipit deleniti velit. Facilis. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis alias qui quaerat
          repellat! Incidunt provident culpa maiores tenetur consequuntur,
          accusantium nemo laudantium, harum quis perferendis a temporibus
          cumque voluptatibus quas!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sed
          cupiditate est minus fugiat praesentium dolores quam pariatur tenetur!
          Illo eos, temporibus facilis officiis necessitatibus voluptatem
          suscipit deleniti velit. Facilis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Blanditiis alias qui quaerat repellat!
          Incidunt provident culpa maiores tenetur consequuntur, accusantium
          nemo laudantium, harum quis perferendis a temporibus cumque
          voluptatibus quas!
        </p>

        <GalleryCard image={gallery[3]} title="Title" />

        <h2>Headings</h2>

        <p>
          We use different heading levels to organize content. Below are
          examples of all the heading levels:
        </p>

        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
        <h3>This is Heading 3</h3>
        <h4>This is Heading 4</h4>
        <h5>This is Heading 5</h5>
        <h6>This is Heading 6</h6>

        <h2>Paragraphs</h2>

        <p>
          Paragraphs are the building blocks of writing. Here is a well-formed
          paragraph with some <a href="#">inline links</a> for additional
          context. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque viverra velit ut velit fermentum, in tincidunt libero luctus.
        </p>

        <h2>Blockquote</h2>

        <blockquote>
          The best way to predict the future is to invent it. — Alan Kay
        </blockquote>

        <p>
          Blockquotes are used to highlight important quotations or statements.
        </p>

        <h2>Lists</h2>

        <h3>Unordered List</h3>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>
            Third item with a sublist:
            <ul>
              <li>Sub-item 1</li>
              <li>Sub-item 2</li>
            </ul>
          </li>
          <li>Fourth item</li>
        </ul>

        <h3>Ordered List</h3>
        <ol>
          <li>First ordered item</li>
          <li>Second ordered item</li>
          <li>Third ordered item</li>
        </ol>

        <h2>Code Examples</h2>

        <p>
          For inline code, you can use the <code>&lt;code&gt;</code> tag, like
          this: <code>console.log</code>.
        </p>

        <h2>Tables</h2>

        <p>
          Sometimes you need to display tabular data. Here’s an example of a
          simple table:
        </p>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Typography</td>
              <td>
                Different text elements like headings, paragraphs, lists, etc.
              </td>
            </tr>
            <tr>
              <td>Code</td>
              <td>Examples of inline and block code snippets.</td>
            </tr>
            <tr>
              <td>Tables</td>
              <td>Structured data representation in rows and columns.</td>
            </tr>
          </tbody>
        </table>
      </article>
      <section>
        <h2>Things to do</h2>
        <BlockLocations />
      </section>
      <Gallery />
    </main>
  );
};
