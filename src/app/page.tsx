import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center text-4xl bg-white rounded-md text-black w-fit p-5 mx-auto font-bold mb-10">
        Design System in Depth
      </h1>

      <div className="flex flex-col justify-center gap-3">
        <Button variant="solid"> SOLID</Button>
        <Button variant="destructive"> DESTRUCTIVE</Button>
        <Button variant="secondary"> SECONDARY</Button>
        <Button variant="outline"> OUTLINE</Button>
        <Button variant="ghost"> GHOST</Button>
        <Button variant="link"> LINK</Button>
      </div>
    </main>
  );
}
