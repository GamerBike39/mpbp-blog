"use client"

import { allPistes } from "@/.contentlayer/generated"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import ts from "typescript"

interface Props {
  className?: string
  leftMenu?: boolean
  action?: () => void
  closeMenu?: () => void
}

interface item {
  _id: string
  slug: string
  title: string
  colorDifficulty?: string | undefined
}


const MenuPistes = ({ className, leftMenu, action }: Props) => {
  const pathName = usePathname()

  // State pour le tri
  const [sortedPistes, setSortedPistes] = useState<item[]>([])

  useEffect(() => {
    const sorted = [...allPistes].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
    setSortedPistes(sorted)
  }, []) // Utilisation de useEffect pour trier la liste au montage du composant

  return (
    // <div className={`${leftMenu ? "fixed top-10  w-max -left-2 px-10 space-y-3 hidden xl:block" : "w-max px-10 space-y-3 -translate-x-20 -translate-y-5"} 
    <div className={`${leftMenu ? "fixed top-10  w-max -left-2 px-10 space-y-3 hidden xl:block" : "w-max px-10 space-y-3"} 
    ${className}`}>
        <Link href="/pistes" onClick={action}>
            <p className="text-sm text-neutral-800 font-bold hover:scale-105 transition">Plan</p>
        </Link>
        <hr  className="text-yellow-500"/>
      {sortedPistes.map((item) => (
        <div key={item._id}>
          {item.slug === pathName ? (
            <>
              <Link href={item.slug} className="flex gap-1 items-center ">
                <p className="text-xl font-bold hover:scale-105 bg-neutral-800 px-5 text-white transition">{item.title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" fill={item.colorDifficulty} />
                </svg>
              </Link>
              <hr />
            </>
          ) : (
            <>
              <Link href={item.slug} className="flex gap-1 items-center">
                <p className="text-sm hover:scale-105 transition hover:font-extrabold hover:bg-neutral-400/40  ">{item.title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" fill={item.colorDifficulty} />
                </svg>
              </Link>
              <hr />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export const MenuPistesMobile = ({ className, action, closeMenu}: Props) => {
    const pathName = usePathname()
    const [sortedPistes, setSortedPistes] = useState<item[]>([])

    useEffect(() => {
      const sorted = [...allPistes].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
      setSortedPistes(sorted)
    }, []) // Utilisation de useEffect pour trier la liste au montage du composant

    return (
        <div className={`${className}`}>
            <Link href="/pistes" onClick={action}>
                <p className="text-sm text-neutral-800 font-bold hover:scale-105 transition">Plan</p>
            </Link>
            <hr/>
          {sortedPistes.map((item) => (
            <div key={item._id}>
              {item.slug === pathName ? (
                <>
                  <Link href={item.slug}>
                    <p className="text-xl font-bold hover:scale-105 bg-neutral-800 px-5 text-white transition">{item.title}</p>
                  </Link>
                  <hr />
                </>
              ) : (
                <>
                  <Link href={item.slug}>
                    <p className="text-sm hover:scale-105 transition hover:font-extrabold hover:bg-neutral-400/40  ">{item.title}</p>
                  </Link>
                  <hr />
                </>
              )}
            </div>
          ))}
        <button 
        className="w-full flex justify-end"
        onClick={closeMenu}>
            Fermer
        </button>
        </div>
      )

}


export default MenuPistes
