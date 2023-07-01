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
import Link from "next/link";


interface PanneauxPisteProps {
  name: string;
  id: number;
  color: "green" | "blue" | "red" | "black" | string;
  size?: "small" | "medium" | "large";
  fontSize?: "small" | "medium" | "large";
  className?: string;
  modalContent?: boolean;
  link? : string;
}

const PanneauxPiste = ({
  name,
  id,
  color,
  size = "medium",
  fontSize = "small",
  className,
  modalContent = false,
  link = ""
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
    <Link href={link}>
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
    </Link>
  );
};

export default PanneauxPiste;




