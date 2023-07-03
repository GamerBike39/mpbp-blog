import { notFound } from "next/navigation"
import { allPistes } from "contentlayer/generated"
import GridPistes from "../components/GridPistes"

import Image from "next/image"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import MenuPistes from "../components/MenuPistes"

import {FaExchangeAlt} from 'react-icons/fa'
import {GiPathDistance} from "react-icons/gi";
import {BiTrendingDown, BiTimer} from "react-icons/bi";

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
      <div>
        <h1 className="mb-2">{post.title}</h1>
        <a href="#pistes" aria-label="choix des pistes" className="mt-2 pb-8">
          <FaExchangeAlt/>
        </a>
    </div>

        <div className="2xl:fixed 2xl:right-6 2xl:top-28 shadow-2xl bg-white/80 p-5 mt-4">
            <p className="text-2xl border-b-2">Statistiques de la piste : </p>
          <div className="w-full grid grid-cols-2 xl:grid-cols-1 space-y-1">
            <p className="font-bold col-span-1 xl:col-span-2 m-0"> {post.distance} Km <GiPathDistance size={35} className="inline"/> </p>
            <p className="font-bold col-span-1 m-0"> {post.elevation}m <BiTrendingDown size={35} className="inline"/></p>
            <p className="font-bold col-span-2 m-0"> {post.estimatedTime} <BiTimer size={35} className="inline"/> </p>
            <p className="font-bold col-span-1 xl:col-span-2  m-0">Virages : {post.virages} </p>
            <span className="font-bold col-span-1 xl:col-span-2  m-0 flex items-center">
              {post.jumps}
              <Image src='/jump.png' alt="icone de saut" width={40} height={40} className="m-0"/>
                </span>
            <a href="#video" className="col-span-2">Vidéos</a>
          </div>
        </div>

      <hr className="my-4" />

      <Mdx code={post.body.code} />
    </article>
    <div id="pistes" className="max-w-3xl mx-auto"> 
    <p className="text-2xl my-2 shadow-2xl px-2">Liste des pistes :</p>
      <GridPistes/>
    </div>
    </>
  )
}
