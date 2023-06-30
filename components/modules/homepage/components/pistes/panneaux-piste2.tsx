'use client';

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
// import { Modal, Text } from "@nextui-org/react";
import pisteContent from "./pisteContent";
import { getColorStyle, getSizeStyle, getFontStyle } from "./getColorStyle";
import { Container } from "@/components/container/container";
// import { NextUIProvider } from '@nextui-org/react';

import {BiTrendingDown} from "react-icons/bi";
import {GiPathDistance} from "react-icons/gi";


interface PanneauxPisteProps {
  name: string;
  id: number;
  color: "green" | "blue" | "red" | "black" | string;
  size?: "small" | "medium" | "large";
  fontSize?: "small" | "medium" | "large";
  className?: string;
  modalContent?: boolean;
}

const PanneauxPiste = ({
  name,
  id,
  color,
  size = "medium",
  fontSize = "small",
  className,
  modalContent = false,
}: PanneauxPisteProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(0); // Nouvelle state pour la piste sélectionnée dans la modal

  const items = pisteContent;

  const handler = () => {
    setSelectedId(id); // Mise à jour de la piste sélectionnée dans la modal
    setVisible(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeHandler = () => {
    setVisible(false);
    document.body.classList.remove("overflow-hidden");
    document.body.style.overflow = "auto";
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItemId = parseInt(event.target.value, 10);
    setSelectedId(selectedItemId); // Mise à jour de la piste sélectionnée dans la modal
  };

  const selectedContent = items.find((item) => item.id === selectedId);

  return (
    <>
      <motion.button
        className={clsx(
          getColorStyle(color),
          getSizeStyle(size),
          className,
          "rotate-45 rounded outline-[#010101] outline-4 border-white border-2 flexCenter relative cursor-pointer"
        )}
        onClick={handler}
        data-name={name}
        initial={{ rotate: 45 }}
        whileHover={{ scale: 1.3, rotate: 40, zIndex: 100 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <p className={clsx(getFontStyle(fontSize), "-rotate-45 text-white uppercase font-bold")}>
          {name}
        </p>
      </motion.button>
      {/* <NextUIProvider> */}
      {/* {visible && (
        <Modal open={visible} onClose={closeHandler} closeButton scroll width="100%" blur className="py-10 mx-auto cursor-default font-gluten" >
          <Modal.Body>
              <div className="flex justify-center items-center">
                  <select value={selectedId} onChange={handleChange} className=" w-4/5 lg:w-1/2 cursor-pointer bg-gray-500 border border-gray-300 px-5 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                       {items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                  </select>
              </div>
            {selectedContent && (
              <Container>
                   <motion.div className="grid place-content-center gap-10"
                    initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                   >

                      <div className="w-full mx-auto col-span-6">
                          <div className="flex flex-col w-full max-w-[33rem]">
                             <div className="w-full flex flex-col gap-3">
                              
                              <PanneauxPiste id={selectedContent.id} name={selectedContent.name} color={selectedContent.color} size="small" fontSize="medium"
                                      className=" pointer-events-none"/>
                                 
                                  <div className="flex items-center gap-3">
                                      <Text style={{fontFamily : "__Gluten_b702bc",}} className="text-gray-700 text-lg font-gluten">
                                        Dénivelé :
                                      </Text>
                                      <Text style={{fontFamily : "__Gluten_b702bc", fontWeight : "bold", fontSize : "20px"}} className="flex items-center gap-2">
                                        {selectedContent.denivele}  <BiTrendingDown size={30}/>
                                        </Text>
                                    </div>
                                
                                
                               
                                <div className="flex items-center gap-3">
                                <Text style={{fontFamily : "__Gluten_b702bc", fontWeight : "normal"}} className="text-gray-700 text-lg">
                                    Longueur :
                                    </Text>
                                    <Text style={{fontFamily : "__Gluten_b702bc", fontWeight : "bold", fontSize : "20px"}} className="flex items-center justify-center gap-2">
                                    {selectedContent.longueur} <GiPathDistance size={30}/>
                                    </Text>
                                </div>
                                    
                                

                             </div>
                          </div>
                      </div>
                          <div className="col-span-6 lg:col-span-3">
                              <Text h4 style={{fontFamily : "__Gluten_b702bc", fontWeight : "bold"}}   className="py-3 text-2xl col-span-3 lg:col-span-2">Description&nbsp;:</Text>
                              <Text style={{fontFamily : "__Gluten_b702bc", color : "rgb(128 128 128)"}} className="text-lg max-w-lg col-span-3 lg:col-span-4 -translate-y-1 text-gray-300">{selectedContent.desc}</Text>
                          </div>
                  {selectedContent.videoUrl ? (<div className="w-full col-span-6 lg:col-span-6">{selectedContent.videoUrl}</div>) : null}
                   </motion.div>
              </Container>
            )}
          </Modal.Body>
        </Modal> */}
      {/* )} */}
      {/* </NextUIProvider> */}
    </>
  );
};

export default PanneauxPiste;




