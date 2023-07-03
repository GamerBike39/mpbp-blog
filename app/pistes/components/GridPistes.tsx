"use client"

import { FC } from 'react';
import { allPistes } from "@/.contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import {GiPathDistance} from "react-icons/gi";
import {BiTrendingDown} from "react-icons/bi";

import { usePathname } from 'next/navigation';

interface GridPistesProps {
 
}

const GridPistes: FC<GridPistesProps> = ({  }) => {

    const topToWindow = () => {
      window.scrollTo(0, 0);
    }

    const pathname = usePathname()
   

  return (
    <div className="grid grid-cols-6 gap-1 md:gap-10  mb-20">
          {allPistes.map((post) => (
            pathname === post.slug ? (
                null
            ) : (
            <article key={post._id} className="group col-span-6 sm:col-span-3 md:col-span-2 w-screen h-48 md:w-64 md:h-64 overflow-hidden relative">
            {post.imagePrev && (
              <Image
              src={post.imagePrev}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={post.title}
              priority={true}
              className="object-cover w-full h-full md:rounded-lg group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
              )}
            <Link href={post.slug} className="absolute w-full h-full flex flex-col justify-end items-start containerBorderBlack rounded-lg" onClick={topToWindow}>
            <div className="flex items-center">
              <h2 className="text-white font-extrabold my-1 px-2">{post.title}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" fill={post.colorDifficulty} stroke='white'/>
                </svg>
            </div>
            <div className="flex justify-between">
              <p className="text-white/90 font-bold px-2 text-sm">{post.elevation}m  <BiTrendingDown size={30} className="inline"/></p>
              <p className="text-white/90 font-bold px-2 text-sm mb-3">{post.distance}km <GiPathDistance size={30} className="inline"/></p>
            </div>
            <div className="hidden md:flex justify-center items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-600">
              <p className="text-white absolute top-[30%]">Plus de détails </p>
            </div>
              </Link>
            </article>)
            )
          )
        }
          </div>
   );
}

export default GridPistes;