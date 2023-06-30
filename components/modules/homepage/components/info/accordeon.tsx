'use client';

import React, { useState } from 'react';
import { contentInfoList } from './content';
import { Typography } from '@/ui/design-system/typography/typography';
import { motion, AnimatePresence  } from 'framer-motion';
import { FaArrowCircleRight } from 'react-icons/fa';
import clsx from 'clsx';
import { BtnAdherer } from './BtnAdherer';


const AccordionMenu = () => {

  const items = contentInfoList;

  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index : any,) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsOpen(true);
  };


  return (
    <div className="accordion-menu  space-y-5 py-14">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`accordion-item ${index === activeIndex ? 'active' : ''} bg-white rounded relative z-10 cursor-pointer`}
        >

          <div className={clsx(isOpen && index === activeIndex ? "bg-green-600 rounded-t" : "", "flex justify-between w-full px-3  items-center")} 
            onClick={() => handleClick(index)}>
            <Typography variant="lead" theme='gray' component='h5'
            className={clsx(isOpen && index === activeIndex ? 'text-white' : "text-gray", "transition-all duration-200 py-5 m-0")}
            >{item.title}
            </Typography>
            <FaArrowCircleRight size={30} className={clsx(isOpen && index === activeIndex ? 'rotate-90 fill-white' : "rotate-0", "transition-all duration-200 w-5")}/>
          </div>

          <AnimatePresence>
          {index === activeIndex && (
            <motion.div className="accordion-content px-3"
              initial={{ height: 0 }}
              exit={{ height: 0, opacity: 0}}
              animate={{ height: 'auto'}}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
            <motion.p className='text-gray-700 py-5 font-gluten cursor-default'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
            >
              {item.content}</motion.p>

              {item.cta ? (<BtnAdherer/>) : null}
            </motion.div>
            )}
            </AnimatePresence>
        </div>
      ))}
    </div>
  );
};


export default AccordionMenu;