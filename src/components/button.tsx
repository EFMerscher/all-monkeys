import * as React from "react";
import Link from "next/link";
import Monkeys from "@/app/monkeys/[id]/page";

type ButtonProps = {monkeyId: string} 

export function Button({monkeyId}: ButtonProps) {
  return (
    <Link href={`/monkeys/${monkeyId}`}>
      <button className="bg-yellow-300 hover:bg-yellow-500 text-black py-2 px-4 rounded-md absolute right-0 bottom-0 font-semibold">
        Learn More -{'>'}
      </button>
    </Link>
  );
}
