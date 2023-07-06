'use client';
import { Typography } from '@/ui/design-system/typography/typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { sliderContent } from './testi-slider-content';

interface SliderProps {
    classname?: string;
}

export const Slider = ({classname}:SliderProps) => {
    return (
        <Splide aria-label="My Favorite Images"
            className={`w-full relative justify-center items-center py-10 ${classname}`}
            options={{
                // type: 'fade',
                gap: '1rem',
                padding: {
                    right: '8rem',
                    left : '8rem',
                    top: '0rem',
                },
                loop: true,
                autoplay: false,
                rewind: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                perPage: 3,
                pagination: true,
                speed: 500,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                width: '100%',
                breakpoints: {
                      1240: {
                          perPage: 2,
                            padding: {
                                right: '2rem',
                                left : '0rem',
                            },
                            pagination: false,
                      },
                      640: {
                          perPage: 1,
                            padding: {
                                right: '2rem',
                                left : '0rem',
                            },
                            pagination: false,
                      },
                }
              }
        
        }
        >
        
            {sliderContent.map((slide, index) => (
                <SplideSlide key={index} className='flex flex-col items-center border-2 border-gray-600/10 shadow-xl p-10 bg-neutral-50 hover:bg-neutral-200/50 transition group'> 
                        <div className='relative w-40 h-40 min-h-max'>
                            <Image src={slide.img} alt={slide.person} fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" placeholder='blur' className='object-cover rounded-full group-hover:scale-110 transition'/>
                        </div>
                    <Typography variant="body-lg" component='p' theme='black' className="text-center z-10 font-bold text-yellow-600 mb-5 mt-3 border-b-4">
                        {slide.person}
                    </Typography>
                    <Typography variant="caption3" component='p' theme='gray' className="z-10 font-light mb-5 min-h-96">
                        {slide.content}
                    </Typography>
                </SplideSlide>
            ))}
        </Splide>
    );
};