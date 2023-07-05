'use client';

import { Typography } from '@/ui/design-system/typography/typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { sliderContent } from './sliderContent';

interface SliderProps {
    classname?: string;
}

export const Slider = ({classname}:SliderProps) => {
    return (
        <Splide aria-label="My Favorite Images"
            className={`w-full relative justify-center items-center ${classname}`}
            options={{
                type: 'fade',
                gap: '1rem',
                autoplay: true,
                rewind: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                // animation    : 'slide',
                // lazyLoad     : 'nearby',
                pagination: false,
                speed: 1500,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                // heightRatio : 0.5,
                // cover       : true,
            }}
        >
            {sliderContent.map((slide, index) => (
                <SplideSlide key={index} className='flex items-end justify-center '> 
                    <Image src={slide.img} alt={slide.title} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 50vw" loading="eager" placeholder='blur' className='lg:rounded' />
                    <Typography variant="lead" component='p' theme='white' className="absolute text-center z-10 font-light font-gluten mb-5">
                        {slide.title}
                    </Typography>
                </SplideSlide>
            ))}
        </Splide>
    );
};
