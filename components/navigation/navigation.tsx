'use client';

import { useState, useEffect } from "react";
import { Logo } from "@/ui/design-system/logo/logo";
import { CustomLink } from "./customLink";
import { Spin as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { SocialNetworksButtons } from "./social-networks-buttons";
import { BtnAdherer } from "@/components/modules/homepage/components/info/BtnAdherer";
import Link from "next/link";
import DropDownMenuPistes from "./dropDown";

interface Props {}

export const Navigation = ({}: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsScrollLocked(!isMobileMenuOpen);
  };

  const handleWindowResize = () => {
    setIsMobileMenuOpen(false);
    setIsScrollLocked(false);  
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isScrollLocked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isScrollLocked]);

  const menuMobile = () => {
    return (
          <motion.div
            className="fixed inset-0 h-full w-full bg-neutral-900 z-30 flex justify-center items-center md:hidden"
            
            animate={isMobileMenuOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            transition={{ duration: 0.5 }}
            variants={variants}
          >
            <div className="absolute top-28">
              {/* <Logo className="fill-white" size="very-large"/> */}
            </div>

            <motion.ul
            
              className={`md:hidden flex items-center gap-7 flex-col`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              // onClick={toggleMobileMenu}
            >
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.2 } }}
               onClick={toggleMobileMenu}
              >
                 <Logo className="fill-white" size="very-large"/>
              </motion.li>
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.2 } }}
               onClick={toggleMobileMenu}
              >
                  <Link href="/" title="Accueil" className="!text-white">
                    Accueil
                  </Link>
              </motion.li>
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.3 } }}
              >
  
                  {/* <Link href="/pistes" title="Plan des pistes"  className="!text-white">
                    Plan des pistes
                  </Link> */}
                    <DropDownMenuPistes mobileMenu={true}  action={toggleMobileMenu}/>
               
                </motion.li>
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.4 } }}
               onClick={toggleMobileMenu}
              >
                  <a href="#adhesion" title="Contact" className="!text-white">
                    Association
                  </a>

                </motion.li>
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.4 } }}
              >
                  <SocialNetworksButtons theme="secondary"/>
                </motion.li>
              <motion.li
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y:0, transition: { duration: 0.4, delay: 0.4 } }}
              >
                  <BtnAdherer/>
                </motion.li>

            </motion.ul>
          </motion.div>
    );
  };

  const menuDesk = () => {
    return (
      <ul key={"desk_menu"} className={`hidden md:flex items-center gap-7 m-0 px-4 py-2 backdrop-blur-md bg-white/50 rounded`}>
        <li className="m-0">
            <Link href="/" >Accueil</Link>
        </li>
        <li>
          <DropDownMenuPistes/>
        </li>
        <li className="m-0">
        <a href="#adhesion" className="font-bold">Adhérer</a>
        </li>
        <li className="m-0">
        <a href="#info">Infos</a>
        </li>
        
         <li className="m-0">
            <CustomLink href="/contact" title="Contact" />
        </li>
        
      </ul>
    );
  };

  return (
    <div className="fixed w-full top-0 z-[500]">
      {/* <Container className="py-1"> */}
        <nav className="flex items-center justify-end gap-7">
          <div className="flex items-center gap-7 rounded">
            <div
              className={clsx(
                isMobileMenuOpen
                  ? "z-[35] fixed right-6 top-4"
                  : "md:hidden flex ml-auto mr-5 mt-2 bg-white/75 rounded"
              )}
            >
              <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu}  color={isMobileMenuOpen ? "white" : "black"}/>
            </div>
      
            <AnimatePresence>
            {isMobileMenuOpen ? menuMobile() : menuDesk()}
            </AnimatePresence>
          </div>
        </nav>
      {/* </Container> */}
    </div>
  );
};
