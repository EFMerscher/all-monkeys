import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import monkeyIcon from "@/assets/monkey2.png";

export function Header() {
  return (
    <header className="bg-neutral-100 py-4 px-16 flex justify-between items-center drop-shadow-md">
      <div className="start-0">
        <Image src={monkeyIcon} width={50} height={50} alt="Monkey icon" />
      </div>
      <p className="text-neutral-900 text-lg font-bold start-0">All Monkeys</p>
      <div className="flex space-x-4">
        <Link href="/" className="text-neutral-900">
          Home
        </Link>
        <Link href="all-monkeys" className="text-neutral-900">
          Monkeys
        </Link>
      </div>
    </header>
  );
}
