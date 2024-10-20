export default async function LocationPage({ params: { slug } }: {
    params: { slug: string };
}) {
    return (    
        <div>Location Page {slug}</div>
    );
}