'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props {
    href: string;
    title: string;
    className?: string;
    target?: "_blank"; 
}

export const CustomLink = ({ href, title, target, className }: Props) => {

  const urlPath = usePathname();

  return (
    <Link href={href} target={target} className={`${className} relative group ${urlPath === href ? 'text-gray font-bold' : "text-gray/70"}`}>
      {title}
      <div
        className={`h-[1px] inline-block  bg-gray  absolute -bottom-0.5 left-0 group-hover:w-full transition-[width] ease-linear duration-300 ${urlPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </div>
    </Link>
  );
};


