import { notFound } from "next/navigation"
import { allPistes } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import MenuPistes from "../components/MenuPistes"

import {FaExchangeAlt} from 'react-icons/fa'
import GridPistes from "../components/GridPistes"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPistes.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPistes.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
    <MenuPistes leftMenu={true}/>
        {/* <MenuPistes/> */}
    <article className="py-6 prose mx-auto px-6">
      <div className="flex items-center gap-1">
        <h1 className="mb-2">{post.title}</h1>
        <a href="#pistes" aria-label="choix des pistes">
          <FaExchangeAlt/>
        </a>
      </div>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
    <div id="pistes" className="max-w-3xl mx-auto"> 
    <p className="text-2xl my-2 shadow-2xl">Liste des pistes :</p>
      <GridPistes/>
    </div>
    </>
  )
}
