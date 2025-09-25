import Button from "./components/ui/Button";
import ThemeChanger from "./components/ui/ThemeChanger";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-primary/10 via-background to-primary/20 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-all duration-500">
      {/* Glass Card */}
      <div className="w-full max-w-2xl backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
        {/* Title */}
        <h1 className="text-center text-4xl font-extrabold bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-yellow-400 bg-clip-text text-transparent">
          Design System in Depth
        </h1>

        {/* Theme Changer */}
        <ThemeChanger />

        {/* Buttons Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <Button variant="solid" size="base" fullWidth>
            SOLID + BASE
          </Button>
          <Button variant="destructive" size="base" fullWidth>
            DESTRUCTIVE + BASE
          </Button>
          <Button variant="secondary" size="sm" fullWidth>
            SECONDARY + SM
          </Button>
          <Button variant="outline" size="lg" fullWidth>
            OUTLINE + LG
          </Button>
          <Button variant="ghost" size="xs" fullWidth>
            GHOST + XS
          </Button>
        </div>
      </div>
    </main>
  );
}
