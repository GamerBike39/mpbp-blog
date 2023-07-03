import { FC, useState } from 'react';
import Image from 'next/image';

interface FullScreenPlanProps {
 
}

const FullScreenPlan = () => {

    const [fullscreen, setFullscreen] = useState(false);


    const toggleFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setFullscreen(false);
      } else {
        document.documentElement.requestFullscreen();
        setFullscreen(true);
      }
    };
  

  return (
    <Image
              src="/img/pistes/plan.webp"
              alt="pistes"
              width={1920}
                height={1080}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onClick={toggleFullscreen}
            />
   );
}

export default FullScreenPlan;