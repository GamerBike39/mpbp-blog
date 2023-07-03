import { FC } from 'react';
import Image from 'next/image';

interface MdxImageProps {
 src : string;
}

const MdxImage: FC<MdxImageProps> = ({  }) => {
  return (
   <div className='relative h-96 w-96'>
       {/* <Image src={src} alt="image" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover'/> */}
       coucou
   </div>
   );
}

export default MdxImage;