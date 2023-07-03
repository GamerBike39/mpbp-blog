'use client';

import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container} from "@/components/container/container";
import  PanneauxPiste  from "./panneaux-piste2";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

// icone : 
import mediumIcon from "£/img/plan/medium.webp"
import { FaDownload } from "react-icons/fa";

// lib zoom
// import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";


// image
import planZoom from "£/img/plan/carte.webp"

export const PlanPiste = () => {
    
    const RefPlan = useRef(null)
    
    return (
        <div id="plan" className="relative w-full  grid place-content-center min-h-[100lvh] bg-neutral-200/50  divider-big-round-top divider-big-round-bottom ">
            {/* <Image src={bgtopo} alt="background plan des pistes" fill quality={100} loading="lazy" className="object-center object-cover sepia brightness-50 opacity-25" /> */}
                    <div className="pt-5 mt-10">
                        <div className="w-fit mx-auto">
                            <Typography variant="h2" component="h2" theme="black" className="w-fit text-center py-12 z-10 beforeLine">
                                Plan des pistes
                            </Typography>
                        </div>
                            <Typography variant="lead" component="h4" className="w-fit px-10 mb-10 z-50 relative mx-auto max-w-3xl font-light text-gray-700">
                                Explorez les 8 pistes enduro exceptionnelles du Mont Poupet Bike Park, conçues pour satisfaire tous les riders, des débutants aux experts.
                            </Typography>
                    </div>
             
            {/* <div className="w-screen relative containerBorderBlack"> */}
        <Container className="my-10 py-6 ">
            <div  className="rounded grid place-content-center grid-cols-2 bg-gray/5 p-1 lg:p-10 shadow-2xl bg-neutral-100" >
                <div ref={RefPlan} className={clsx("col-span-2 lg:col-span-1")} >

                                {/* <TransformWrapper centerOnInit>
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <>
                                <div className="flex gap-1 absolute z-50 text-white">
                                <button className="bg-gray-800" onClick={() => zoomIn()}><MdZoomIn size={40}/></button>
                                <button className="bg-gray-800" onClick={() => zoomOut()}><MdZoomOut size={40}/></button>
                                <button className="bg-gray-800" onClick={() => resetTransform()}><TbZoomReset size={40}  /></button>
                                {/* <button className="bg-gray-800" onClick={handleClickFullScreen}>Mettre en plein écran</button> */}
                            {/* </div>
                        <TransformComponent contentClass="cursor-zoom-in rounded" > */} 
                            <Image src={planZoom} loading="lazy" placeholder="blur" alt="plan des pistes" width={560}
                            id="plan"  className="w-full rounded shadow-xl"/>
                        {/* </TransformComponent>
                                </>
                                )}
                            </TransformWrapper> */}

                    <Link href="/img/plan/plan-piste.jpg"  target="_blank" title="telecharger le plan" className="flex justify-end relative z-50 w-full my-1 ml-auto">
                        <motion.p className="flex gap-2 items-center px-5 font-bold"
                        whileHover={{scale:1.1,}}
                        whileTap={{scale:0.9}}
                        transition={{duration:0.2, type:"spring", bounce:0.5, stiffness:100, damping:10, mass:0.5}}

                        >
                        Télécharger le plan <FaDownload/>
                        </motion.p>
                    </Link>
                </div>
                        
                    <div className="grid grid-cols-3 col-span-2 lg:col-span-1 content-center justify-center items-baseline relative my-20 md:my-10">
                                    <div className="absolute text-center w-full text-4xl -top-10">
                                        <Typography variant="h4" component="h3" theme="black" className="w-fit mx-auto font-normal border-b-2 border-gray-600 border-dashed">
                                            8 pistes
                                        </Typography>
                                    </div>
                            <div className="grid col-span-1 place-content-center place-items-center">
                                <div className="relative flex flex-col justify-center items-center mb-5">
                                    <Image src={mediumIcon} alt="icone piste facile" width={100} className="-rotate-[20deg] mb-3" />
                                    <Typography variant="caption4" component="p" theme="gray" className="text-center absolute bottom-0">
                                        Facile
                                    </Typography>
                                </div>
                                <PanneauxPiste id={1} name="Fast'oche" color="green" size="small" fontSize="medium" link="/pistes/fastoche"/>
                                <PanneauxPiste id={2} name="Camomille" color="blue" size="small" fontSize="medium" link="/pistes/camomille" />
                            </div>
                            <div className="grid col-span-1 place-content-center place-items-center">
                                <div className="relative flex flex-col justify-center items-center mb-5">
                                    <Image src={mediumIcon} alt="icone piste facile" width={100} className="-rotate-[1deg] mb-3" />
                                    <Typography variant="caption4" component="p" theme="gray" className="text-center absolute bottom-0">
                                        Moyen
                                    </Typography>
                                </div>
                                <PanneauxPiste id={3} name="Hip hop" color="red" size="small" fontSize="medium" link="/pistes/hip-hop"/>
                                <PanneauxPiste id={4} name="La spé du patron" color="red" size="small" fontSize="medium" link="/pistes/la-spe-du-patron"/>
                                <PanneauxPiste id={5} name="FonceMonga" color="red" size="small" fontSize="medium" link="/pistes/foncemonga"/>
                                <PanneauxPiste id={6} name="Grand Canyon" color="red" size="small" fontSize="medium" link="/pistes/grand-canyon"/>
                            </div>
                            <div className="grid col-span-1 place-content-center place-items-center">
                                <div className="relative flex flex-col justify-center items-center mb-5">
                                    <Image src={mediumIcon} alt="icone piste facile" width={100} className="rotate-[45deg] mb-3" />
                                    <Typography variant="caption4" component="p" theme="gray" className="text-center absolute bottom-0">
                                        Difficile
                                    </Typography>
                                </div>
                                <PanneauxPiste id={7} name="Zoizo Bob" color="black" size="small" fontSize="medium" link="/pistes/zoizo-bob"/>
                                <PanneauxPiste id={8} name="Dead Cervicals" color="black" size="small" fontSize="medium" link="/pistes/dead-cervicals" />
                            </div>
                            <Typography variant="caption4" component="p" theme="gray" className="text-right col-span-3 w-full font-light mt-10 px-2">
                           Cliquer sur les panneaux pour découvrir les pistes.
                        </Typography>
                    </div>
            </div>
        
        </Container>
    {/* </div> */}
        </div>
    )

};


