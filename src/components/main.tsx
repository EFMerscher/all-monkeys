import * as React from 'react'
import { Card } from '@/components/card'
import monkeysData from '@/data/monkeysData.json'

interface Monkey {
  imageUrl: string;
  name: string | null;
  scientificName: string;
  weight: string | null;
  height: string | null;
  lifetime: string | null;
  conservation: string | null;
}

export function Main() {
  return (
    <main className="bg-blue-100 py-5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    {monkeysData.map((monkey: Monkey, index: number) => (
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
  )
}
