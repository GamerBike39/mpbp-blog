import { FC, useState } from 'react';
import Image from 'next/image';

interface PlanFullScreenToggleProps {
 
}

const PlanFullScreenToggle: FC<PlanFullScreenToggleProps> = ({  }) => {

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
       <div className="px-10 w-full h-[60vh] relative mb-16">
            <Image
              src="/img/pistes/plan.webp"
              alt="pistes"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-scale-down w-full h-full md:rounded-lg cursor-pointer"
              onClick={toggleFullscreen}
            />
            {fullscreen && (
              <button
                className="absolute top-2 right-2 text-white bg-black rounded p-2"
                onClick={toggleFullscreen}
              >
                Quitter le plein écran
              </button>
            )}
          </div>
   );
}

export default PlanFullScreenToggle;