import * as React from "react";
import Link from "next/link";

export function Button() {
  return (
    <Link href="macacoNome">
      <button className="bg-yellow-300 hover:bg-yellow-500 text-black py-2 px-4 rounded-md">
        Learn More -{'>'}
      </button>
    </Link>
  );
}
