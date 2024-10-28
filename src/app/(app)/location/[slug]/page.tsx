import { useLocations } from "@/lib/locations";

export default async function LocationPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { location } = useLocations();
  const place = await location(slug);
  if (!place) return <div>cant find</div>;
  const { name, description, image } = place;
  return (
    <div>
      Location Page {slug} {name}
    </div>
  );
}
