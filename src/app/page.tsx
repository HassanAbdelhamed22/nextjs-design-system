import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center text-4xl bg-white rounded-md text-black w-fit p-5 mx-auto font-bold mb-10">
        Design System in Depth
      </h1>

      <div className="flex flex-col gap-5 items-center">
        <Button variant="solid" size="base"> SOLID + BASE</Button>
        <Button variant="destructive" size="base"> DESTRUCTIVE + BASE</Button>
        <Button variant="secondary" size="sm"> SECONDARY + SM</Button>
        <Button variant="outline" size="lg"> OUTLINE + LG</Button>
        <Button variant="ghost" size="xs"> GHOST + XS</Button>
        <Button variant="link"> LINK</Button>
      </div>
    </main>
  );
}
