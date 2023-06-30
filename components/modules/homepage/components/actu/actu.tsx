'use client';

import { Container } from "@/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { useState, useEffect } from 'react';
import { motion, spring } from 'framer-motion';
import { Button } from "@/ui/design-system/button/button";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ActusProps {
    actus: {
      [key: string]: {
        title: string;
        content: {
          [key: number]: string;
        };
      };
    };
  }


export const Actus: React.FC<ActusProps> = ({ actus }) => {

    const [selectedTitle, setSelectedTitle] = useState('');

    const [actuNumber, setActuNumber] = useState(0);

    useEffect(() => {
        // Sélectionne le premier titre par défaut
        const firstTitle = Object.keys(actus)[actuNumber];
        setSelectedTitle(firstTitle);
      }, [actus, actuNumber]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 }, delay: 0.2, },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleTitleClick = (title: string) => {
    setSelectedTitle(title);
  };

  const handleActuNumberNext = () => {
    setActuNumber(actuNumber + 1);
    if (actuNumber >= 7) {
        setActuNumber(0);
    }
    window.location.href = "#actushape";
    };

    const handleActuNumberPrev = () => {
        setActuNumber(actuNumber - 1);
        if (actuNumber <= 0) {
            setActuNumber(7);
        }
        window.location.href = "#actushape";
        };


  let numberList = 1;

    return (
        <Container className="mb-20 py-20">
              <div id="actushape" className="w-fit mx-auto mt-5 mb-10">
                <Typography variant="h2" component="h2" theme="black" className="w-fit text-center pb-5 z-10 beforeLine">
                    Shape Actu 
                </Typography>
            </div>
            
            <div className="flex">
      <div className="w-1/3 hidden lg:block">
        <ul className="list-disc list-inside ml-4">
          {Object.values(actus).map((actusItem) => (
            <motion.li
              key={actusItem.title}
              className={`my-2 cursor-pointer ${
                actusItem.title === selectedTitle ? 'font-bold' : ''
              }`}
              onClick={() => handleTitleClick(actusItem.title)}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {actusItem.title}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className="w-full lg:w-2/3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {selectedTitle && actus[selectedTitle]?.content && (
          <div className="my-4">
            <div className="flex gap-6 items-center justify-center">
            <span onClick={handleActuNumberPrev} className="cursor-pointer"><FaArrowCircleLeft size={20}/></span>
              <h2 className="text-2xl font-bold m-0">{selectedTitle}</h2>
            <span onClick={handleActuNumberNext} className="cursor-pointer"><FaArrowCircleRight size={20}/></span>
            </div>
            <ul className="list-disc list-inside ml-4">
              {Object.values(actus[selectedTitle].content).map(
                (item, index) => (
                  <motion.li
                    key={index}
                    className="my-2"
                    variants={itemVariants}
                  >
                   <span className="font-bold">{numberList++}</span> : {item}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
        
        <div className="flex gap-5 w-full justify-end">
          <Button action={handleActuNumberPrev} title="précédent">Précédent</Button>
          <Button action={handleActuNumberNext} title="suivant">Suivant</Button>
        </div>

        </Container>
    )
};