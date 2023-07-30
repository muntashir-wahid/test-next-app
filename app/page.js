"use client";

import ToggleText from "@/components/ToggleText";
import Hero from "@/components/Hero";
import { useState } from "react";
import ProductList from "@/components/ProductList";
import Login from "@/components/Login";
import Button from "@/components/Button";
import Application from "@/components/Application";
import Skills from "@/components/Skills";

const skills = [
  { name: "React.js", id: "react.js" },
  { name: "Next.js", id: "next.js" },
  { name: "Node.js", id: "node.js" },
];

export default function Home() {
  const [showText, setShowText] = useState(true);

  return (
    <>
      <Hero />
      <Button
        onClick={() => setShowText((prevState) => !prevState)}
        className="p-3 border border-gray-700 rounded-md"
        id="show-text"
        type="button"
      >
        Show
      </Button>
      <ToggleText showText={showText} />

      <Login />

      <Application />

      <Skills skills={skills} />
    </>
  );
}
