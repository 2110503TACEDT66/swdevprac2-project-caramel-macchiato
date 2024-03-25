import getSpaces from "@/libs/getSpaces";
import Banner from "../components/Banner";
import Card from "@/components/Card";

export default async function Home() {
  const spaces: SpaceJson = await getSpaces();

  return (
    <main>
      <Banner />
      <div className="mx-20 my-20">
        <h1 className="text-5xl text-">Available Co-working Space</h1>
        <div className="grid grid-cols-4 gap-9 py-10">
          {spaces.data.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
