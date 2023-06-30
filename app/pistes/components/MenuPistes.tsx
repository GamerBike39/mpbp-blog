"use client"

import { allPistes } from "@/.contentlayer/generated"
import Link from "next/link"

const MenuPistes = () => {

    const actifPath = window.location.pathname

  
    return (
        <div className="fixed top-10  w-max left-0 hidden lg:block px-10 space-y-3">
               {allPistes.map((post) => (
        <div key={post._id}>
            
         {post.slug === actifPath ? (
             <>
             <Link href={post.slug}>
            <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
            <hr />
            </>
         ) : (
            <>
            <Link href={post.slug}>
            <h2 className="text-sm">{post.title}</h2>
            </Link>
            <hr />
            </>
         )}
        </div>
      ))}
        </div>
    )
}

export default MenuPistes