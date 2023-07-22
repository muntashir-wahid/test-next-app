"use client";

import ToggleText from "@/components/ToggleText";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(true);

  return (
    <>
      <Hero />
      <button
        onClick={() => setShowText((prevState) => !prevState)}
        className="p-3 border border-gray-700 rounded-md"
      >
        Show
      </button>
      <ToggleText showText={showText} />
    </>
  );
}
