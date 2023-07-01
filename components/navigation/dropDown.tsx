'use client';

import { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import MenuPistes, {MenuPistesMobile} from '@/app/pistes/components/MenuPistes';

interface Props {
    mobileMenu?: boolean;
    action? : ()=>void;
}

const DropDownMenuPistes = ({mobileMenu, action}:Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
            setIsOpen(false);
    }


  return (
    <div className={`relative z-50 h-auto`} onMouseLeave={handleMouseLeave}>
    {mobileMenu? (<p onClick={handleClick} className={`font-semibold text-lg  text-white cursor-pointer `}>
    Pistes   
   </p>): (<p onMouseEnter={handleMouseEnter} className={`font-semibold text-lg cursor-pointer`}>
    Pistes   
   </p>)}

   <AnimatePresence>
    {isOpen && (
        <motion.div className={`${mobileMenu? "fixed top-0 left-0 w-screen z-[500]" : "absolute top-3 origin-top-left p-5"}`}
          initial={{ scale: 0, opacity: 0, y: -10, x: -20}}
          exit={{ scale: 0, opacity: 0, y: -10}}
          animate={{ opacity: 1, scale: 1, y: 0}}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
        {mobileMenu? <MenuPistesMobile className='bg-white p-10 space-y-5 h-screen ' action={action} closeMenu={handleClick}/> : <MenuPistes action={handleClick} leftMenu={false} className={`bg-white backdrop:blur-lg py-5 ${mobileMenu? 'w-screen' :""}`} />}
        </motion.div>
    )}
    </AnimatePresence>
   
   </div>
   );
}

export default DropDownMenuPistes;