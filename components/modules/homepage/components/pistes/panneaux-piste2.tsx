
import clsx from "clsx";
import { motion } from "framer-motion";
import { getColorStyle, getSizeStyle, getFontStyle } from "./getColorStyle";
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
  link = ""
}: PanneauxPisteProps) => {
  
  return (
    <Link href={link}>
      <motion.button
        className={clsx(
          getColorStyle(color),
          getSizeStyle(size),
          className,
          "rotate-45 rounded outline-[#010101] outline-4 border-white border-2 flexCenter relative cursor-pointer"
        )}
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




