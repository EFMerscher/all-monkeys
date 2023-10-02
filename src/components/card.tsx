import * as React from 'react'
import { Button } from '@/components/button'
import Image from 'next/image'


interface Card {
  name: string | null;
  scientificName: string;
  weight: string | null;
  height: string | null;
  lifetime: string | null;
  conservation: string | null;
  imageUrl: string;
}

export const Card: React.FC<Card> = ({ name, scientificName, weight, height, lifetime, conservation, imageUrl }) => {
  const replaceNullWithUnknown = (value: string | null) => {
    return value === null ? 'unknown' : value; }
  return (
    <div className="bg-white rounded-lg shadow-lg border-solid border-2 p-4 grid">
      <div className="">
        <Image 
          src={imageUrl}
          alt="Monkey image"
          width={500}
          height={300}
          className="h-72"
        />
      <h2 className="flex justify-center text-xl font-semibold pt-4">{name}</h2>
      <p className="flex justify-center text-gray-500 ">{scientificName}</p>
      </div>
      <div>
      <p className="pt-4"><span className="font-bold">Size:</span> {replaceNullWithUnknown(height)}</p>
      <p><span className="font-bold">Weight:</span> {replaceNullWithUnknown(weight)}</p>
      <p><span className="font-bold">Lifespan:</span> {replaceNullWithUnknown(lifetime)}</p>
      <p><span className="font-bold">Conversation:</span> {replaceNullWithUnknown(conservation)}</p>
      </div>
      <div className="flex relative left-0	">
        <Button monkeyId={scientificName} />
      </div>
    </div>
  );
};

export default Card;
