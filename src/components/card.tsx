import * as React from 'react'
import { Button } from '@/components/button'
import Image from 'next/image'


interface Card {
  name: string | null;
  scientificName: string | null;
  weight: string | null;
  height: string | null;
  lifetime: string | null;
  imageUrl: string;
}

export const Card: React.FC<Card> = ({ name, scientificName, weight, height, lifetime, imageUrl }) => {
  const replaceNullWithUnknown = (value: string | null) => {
    return value === null ? 'unknown' : value; }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 grid">
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
      <p className="pt-4">Weight: {replaceNullWithUnknown(weight)}</p>
      <p>Height: {replaceNullWithUnknown(height)}</p>
      <p>Lifetime: {replaceNullWithUnknown(lifetime)}</p>
      </div>
      <div className="flex relative left-0	">
        <Button />
      </div>
    </div>
  );
};

export default Card;
