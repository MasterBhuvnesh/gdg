"use client";

import { HeroGeometric } from "@/components/comp/shape-landing-hero";
import Link from "next/link";

export default function Home() {
  // Use a regular <a> tag with target="_blank" or location.href for external redirect
  // Here, we'll redirect immediately on click using an onClick handler

  return (
    <div className="flex flex-col bg-black">
      <a
        href="https://bkp5.gdgrbu.tech"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        <HeroGeometric
          badge="Upcoming event on 31th August 2025"
          title1="Innovate, Code"
          title2="with GDG RBU"
        />
      </a>
    </div>
  );
}
