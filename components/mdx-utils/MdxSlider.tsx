'use client';

import { Typography } from '@/ui/design-system/typography/typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

interface SliderProps {
    classname?: string;
    slides: Array<{ img: string; title: string }>; // Ajoutez une prop "slides" pour les données des diapositives
}

const MdxSlider = ({ classname, slides }: SliderProps) => {
    return (
        <Splide
            aria-label="Mes images préférées"
            className={`w-full flex relative justify-center items-center ${classname}`}
            options={{
                type: 'fade',
                gap: '1rem',
                autoplay: true,
                rewind: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                pagination: false,
                speed: 600,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                aspectRatio: '1/1',
            }}
        >
            {slides.map((slide, index) => (
                <SplideSlide key={index} className="flex items-end justify-center">
                    <Image
                        src={slide.img}
                        alt={slide.title}
                        width={600}
                        height={600}
                        loading="eager"
                        className="lg:rounded"
                    />
                    {/* <Typography variant="lead" component="p" theme="white" className="absolute text-center z-10 font-light font-gluten mb-5">
                        {slide.title}
                    </Typography> */}
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default MdxSlider;

// ******utilisation******

// <MdxSlider 
// classname="votre-classe-personnalisée"
// slides={[
//     { img: 'chemin/vers/image1.jpg', title: 'Titre 1' },
//     { img: 'chemin/vers/image2.jpg', title: 'Titre 2' },
//     // Ajoutez d'autres diapositives ici
// ]}
// />