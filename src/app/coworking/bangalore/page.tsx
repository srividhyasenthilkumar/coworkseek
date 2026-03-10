"use client";
import { bangaloreSpaces } from "../../../data/bangalorespace";
import CityTemplate from "@/components/CityTemplate";

export default function BangalorePage() {
  return (
    <CityTemplate
      cityName="Bangalore"
      cityImage="/assets/places/bangalore.jpg"
      tagline="The Silicon Valley of India"
      description="Innovate alongside the world's brightest minds in the global capital of technology and startups."
      spaces={bangaloreSpaces}
    />
  );
}
