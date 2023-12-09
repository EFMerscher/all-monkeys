import * as React from "react";
import { Card } from "@/components/card";
import monkeysData from "@/data/monkeysData.json";

export function Main() {
  return (
    <main className="bg-slate-200 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
        {monkeysData.map((monkey: Card, index: number) => (
          <Card
            key={index}
            imageUrl={monkey.imageUrl}
            name={monkey.name}
            scientificName={monkey.scientificName}
            weight={monkey.weight}
            height={monkey.height}
            lifetime={monkey.lifetime}
            conservation={monkey.conservation}
          />
        ))}
      </div>
    </main>
  );
}


