import { allPistes } from "@/.contentlayer/generated"
import Image from "next/image"
import Link from "next/link"
import MenuPistes from "./components/MenuPistes"

export default function blog(){
    return (
      <>
        <div className="prose dark:prose-invert mx-auto px-6">

           {allPistes.map((post) => (
             <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
            {post.imagePrev && (
              <Image
              src={post.imagePrev}
              width={400}
              height={400}
              alt={post.title}
              />
              )}
        </article>
      ))}
        </div>
      <MenuPistes leftMenu={true} />
      </>


    )
}

