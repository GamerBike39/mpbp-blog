'use client';
import { FC, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


interface MdxImageProps {
 src : string;
 className?: string;
 desc?: string;
}

const MdxImage: FC<MdxImageProps> = ({ src, desc, className }) => {

  const ref = useRef(null);
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: 200
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const isInView = useInView(
    ref,
    { once: true },    
    );


  return (
    <>
   <motion.div  className={`relative h-96 max-w-96 mx-auto md:h-[600px] md:w-[600px] my-5 ${className ? className : null}`}
    variants={motionVariants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
   >
       <Image ref={ref} src={src} alt="image" fill priority placeholder='empty' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw" className='object-cover w-full h-full'/>
       <p className='my-10 pb-2 text-neutral-700'>{desc}</p>
   </motion.div>
    </>
   );
}

export default MdxImage;