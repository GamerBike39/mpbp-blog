'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {BiLinkExternal} from 'react-icons/bi'

export function BtnAdherer() {
  return (
    <motion.div className={"w-full flex"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="https://www.helloasso.com/associations/muddy-bike-crew/adhesions/adhesions-2023-association-mont-poupet-bike-park" target='_blank' className='ml-auto no-underline'>
        <motion.button className="ml-auto rounded bg-green-600 px-3 py-5 mb-5 text-white font-bold text-sm flex items-center"
          whileHover={{ scale: 1.1, type: 'spring' }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {`Adhérer à l'association` } <BiLinkExternal className='inline-block ml-2' size={20}/>
        </motion.button>
      </Link>
    </motion.div>
  );
}
