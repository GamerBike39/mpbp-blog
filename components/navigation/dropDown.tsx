'use client';

import { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import MenuPistes, {MenuPistesMobile} from '@/app/pistes/components/MenuPistes';

import Link from 'next/link';

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
   </p>): (<Link href='/pistes' onMouseEnter={handleMouseEnter} className={`font-bold text-lg cursor-pointer`}>
    Pistes   
   </Link>)}

   <AnimatePresence>
    {isOpen && (
        <motion.div className={`${mobileMenu? "fixed top-0 left-0 w-screen z-[5000]" : "absolute top-6 -left-20 "}`}
          initial={{  opacity: 0,x:0}}
          exit={{ opacity: 0,}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
        {mobileMenu? <MenuPistesMobile className='bg-white p-10 space-y-5 h-screen ' action={action} closeMenu={handleClick}/> : <MenuPistes action={handleClick} leftMenu={false} className={`bg-neutral-100 backdrop:blur-lg py-5 rounded-md px-3 min-w-[250px] ${mobileMenu? 'w-screen' :""}`} />}
        </motion.div>
    )}
    </AnimatePresence>
   
   </div>
   );
}

export default DropDownMenuPistes;