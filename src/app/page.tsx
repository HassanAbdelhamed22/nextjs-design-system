import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center text-4xl bg-white rounded-md text-black w-fit p-5 mx-auto font-bold mb-10">
        Design System in Depth
      </h1>

      <div className="flex flex-col justify-center gap-3">
        <Button> SOLID</Button>
        <Button> DESTRUCTIVE</Button>
        <Button> SECONDARY</Button>
        <Button> OUTLINE</Button>
        <Button> GHOST</Button>
        <Button> LINK</Button>
      </div>
    </main>
  );
}
