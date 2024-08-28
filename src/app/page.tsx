import { Movies } from "../components/movie/Movies";

export default function Home() {
  return (
    <main className="flex flex-col w-full px-[12%] py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-bold text-foreground text-2xl">Popular movies</h1>
        <p className="text-muted text-center">A list of most popular movies around the world</p>
      </div>

      <Movies />
    </main>
  );
}
