import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ItemProps {
  icon: StaticImport | string;
  children?: string;
  link: string;
  className: string;
}

export default function Item({ icon, children, link, className }: ItemProps) {
  return (
    <Link
      className={`${className} flex justify-between items-center md:w-96 w-64 rounded-3xl shadow-sm shadow-gray-700 border-2 border-primary p-4 bg-secondary hover:scale-105 transition-transform duration-500`}
      href={link}
    >
      <Image src={icon} alt="icons" width={32} height={32} />
      <h1 className="text-primary">{children}</h1>
      <div></div>
    </Link>
  );
}
