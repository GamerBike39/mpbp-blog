"use client"

import { allPistes } from "@/.contentlayer/generated"
import Link from "next/link"
import { useState, useEffect } from "react"

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
}

const actifPath = window.location.pathname

const MenuPistes = ({ className, leftMenu, action }: Props) => {

  // State pour le tri
  const [sortedPistes, setSortedPistes] = useState<item[]>([])

  useEffect(() => {
    const sorted = [...allPistes].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
    setSortedPistes(sorted)
  }, []) // Utilisation de useEffect pour trier la liste au montage du composant

  return (
    <div className={`${leftMenu ? "fixed top-10  w-max -left-2 px-10 space-y-3 hidden xl:block" : "w-max px-10 space-y-3 -translate-x-20 -translate-y-5"} 
    ${className}`}>
        <Link href="/pistes" onClick={action}>
            <p className="text-sm text-neutral-800 font-bold hover:scale-105 transition">Plan</p>
        </Link>
        <hr  className="text-yellow-500"/>
      {sortedPistes.map((item) => (
        <div key={item._id}>
          {item.slug === actifPath ? (
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
    </div>
  )
}

export const MenuPistesMobile = ({ className, action, closeMenu}: Props) => {
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
              {item.slug === actifPath ? (
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
