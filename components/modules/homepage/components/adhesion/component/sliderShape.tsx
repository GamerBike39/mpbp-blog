'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { sliderShapeContent } from './sliderContent';

interface SliderProps {
    classname?: string;
}

export const SliderShape = ({classname}:SliderProps) => {
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
                lazyLoad     : 'nearby',
                pagination: false,
                speed: 1500,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                // heightRatio : 0.5,
                // cover       : true,
            }}
        >
            {sliderShapeContent.map((slide, index) => (
                <SplideSlide key={index} className='relative h-96 w-96'>
                    <Image src={slide.img} alt={slide.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 50vw" loading="eager" className='brightness-85 lg:rounded mx-auto object-cover' />
                </SplideSlide>
            ))}
        </Splide>
    );
};