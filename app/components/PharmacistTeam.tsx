"use client";

import Image from "next/image";
import { Pharmacist } from "../types/pharmacy";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PharmacistTeamProps {
  pharmacists: Pharmacist[];
}

function PharmacistCard({ pharmacist }: { pharmacist: Pharmacist }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
          src={pharmacist.photoUrl}
          alt={pharmacist.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{pharmacist.name}</h3>
        <p className={`text-gray-600 ${!isExpanded ? "line-clamp-3" : ""}`}>
          {pharmacist.description}
        </p>
        {pharmacist.description.length > 150 && (
          <Button
            variant="link"
            className="p-0 h-auto mt-2 text-primary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </div>
    </div>
  );
}

export function PharmacistTeam({ pharmacists }: PharmacistTeamProps) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pharmacists.map((pharmacist) => (
          <PharmacistCard key={pharmacist.name} pharmacist={pharmacist} />
        ))}
      </div>
    </section>
  );
}
