import { FC, lazy } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MdxImageProps {
 src : string;
 className?: string;
 desc?: string;
}

const MdxImage: FC<MdxImageProps> = ({ src, desc, className }) => {
  return (
    <>
   <motion.div className={`relative h-96 max-w-96 mx-auto md:h-[600px] md:w-[600px] my-5 ${className ? className : null}`}
    initial={{
    y: 200,
    opacity: 0
    }}
   whileInView={{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }}
   }

   >
       <Image src={src} alt="image" fill priority placeholder='empty' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw" className='object-cover w-full h-full'/>
       <p className='my-10 pb-2 text-neutral-700'>{desc}</p>
   </motion.div>
    </>
   );
}

export default MdxImage;