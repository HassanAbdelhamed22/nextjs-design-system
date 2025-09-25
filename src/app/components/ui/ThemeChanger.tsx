"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-500">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Current Theme:{" "}
        <span className="font-bold text-blue-500 dark:text-yellow-400 capitalize">
          {theme}
        </span>
      </h2>

      <div className="flex gap-4">
        <button
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-yellow-400 text-white font-medium shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          <FaSun />
          Light
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-800 text-white font-medium shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          <FaMoon />
          Dark
        </button>
      </div>
    </div>
  );
};

export default ThemeChanger;
