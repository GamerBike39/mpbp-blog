
import Image from "next/image"
import MenuPistes from "./components/MenuPistes"

import AnimatedNumbers from "@/components/animation/AnimatedNumbers";
import GridPistes from "./components/GridPistes";

export default function blog(){
  

    return (
      <>
        <div className=" mx-auto flex justify-center flex-col items-center md:mt-16 w-full">

          <div className="flex flex-col justify-center items-center w-full mb-14 mt-10">
            <h1 className="text-2xl md:text-4xl lg:text-6xl">Plan des pistes</h1>
          </div>
          <GridPistes />
          <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl items-center justify-center gap-2">
            <div className="mb-10 min-w-min space-y-2">
              <div className="flex gap-1 text-3xl">
               <AnimatedNumbers value={19} timeAnimation={5000}/>
               <p>Km de trails shappé à la main&nbsp;!</p>
              </div>
              <hr />
              <div className="flex gap-1 text-3xl">
               <AnimatedNumbers value={96} timeAnimation={5000}/>
               <p>Virages relevés !</p>
              </div>
              <hr />
              <div className="flex gap-1 text-3xl">
               <AnimatedNumbers value={84} timeAnimation={5000}/>
               <p>Jumps !</p>
              </div>
              <hr />
            </div>
            <div className="px-10 w-full h-[60vh] relative ">
              <Image
                src="/img/pistes/plan.webp"
                alt="pistes"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-scale-down w-full h-full md:rounded-lg"
              />
            </div>
          </div>
          
         
        </div>
      <MenuPistes leftMenu={true} />
      </>


    )
}

