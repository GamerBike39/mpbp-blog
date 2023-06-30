'use client';

import { LargeContainer, Container } from '@/components/container/container';
import { Typography } from '@/ui/design-system/typography/typography';
import '@splidejs/react-splide/css';
import styles from './hero.module.css';
import AnimatedNumber  from '@/components/animation/AnimatedNumbers';
import { Slider } from './Slider';
import Image from 'next/image';

// image
import Logo  from "£/img/logo/logo-poupet.svg";
import hand from '£/img/hero/hand.png'
import claraWheelie from "£/img/hero/clara-wheelie.png";
import { Button } from '@/ui/design-system/button/button';
import crampons from "£/img/svg/crampons.svg";


 const Heroslider = () => {
  return (
      
      <div id='top' className='flex flex-wrap items-start relative containerBorderBlack'>
      <LargeContainer className='lg:mb-6 lg:mt-0 px-6 relative'>
    <div className='w-full relative z-20 lg:mb-10'> 
       <Image src={Logo} alt='Mont Poupet Bike Park' width={600} priority className='mx-auto'/>
       <h3 className='text-center'>The Smiling Zone</h3>
    </div>
            <Image src={hand} width={400} alt='main de shapper' className='absolute -right-5 top-5 -rotate-90 z-10 hidden xl:block rotateAnime'/>
        <Image src={claraWheelie} alt='hero' width={300} priority className='absolute brightness-85 mx-auto z-0 top-22 hidden xl:block w-[50px] lg:w-80'/>
    <Container>
    <div className='w-full flex flex-col-reverse my-2 lg:mb-2 lg:flex-row items-center'>
        {/* <div className='w-2/4'>
          <Image src={prez} alt='image du président de l&apos;association' 
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 50vw'
          />
        </div> */}
        <div className='w-full lg:px-5 relative z-20 flex flex-col justify-center items-center'>
            {/* <Typography variant="h5" component='p' className="z-10 font-light font-gluten text-gray-800 text-center">
            Bienvenue au paradis du VTT !
            </Typography> */}
             <div className="w-fit mx-auto lg:px-10">
                            <Typography variant="h2" component="h1" theme="black" className="w-full mx-auto lg:w-fit text-center py-12 z-10 beforeLine">
                                Le Paradis du VTT&nbsp;!
                            </Typography>
                            <Typography variant="caption3" component="h3" theme="gray" className="w-full lg:w-2/3 mx-auto text-center z-10">
                                Venez découvrir le Mont Poupet Bike Park, un bike park unique en son genre, situé à Salins-les-Bains dans le Jura.
                            </Typography>
                        </div>
            {/* <p className='pt-3 lg:pt-8 text-right w-full text-gray-700'>Président of the Mont Poupet Bike Park</p> */}
            <div className='flex gap-5 w-full justify-center'>
                <Button baseUrl='#adhesion' title='adhesion' linkType='internal' >Adhérer</Button>
                <Button baseUrl='#plan' title='plan des pistes' linkType='internal' >Plan des pistes</Button>
            </div>

            <a href="#slider" className='hidden lg:block'>
                <Image src={crampons} alt='crampons' width={20} className='py-10 my-10'/>
            </a>

        </div>
    </div>
    </Container>
    </LargeContainer>
    {/* <LargeContainer className='relative z-20 my-40'> */}

    <div id='slider' className='w-full grid grid-cols-10 gap-10  pt-20 mt-2 mb-24 place-content-center place-items-center'>
        <div className='col-span-10 lg:col-span-4'>
                <div className='w-full lg:my-32 my-5 lg:hidden'>
                    <Typography variant='h4' className='text-center'>
                        Des chiffres incroyables
                    </Typography>
                    <hr />
                </div>
            <div className='flexCenter gap-5 lg:gap-10 flex-wrap max-w-md mx-auto'>
                <p className={`${styles.stat} col-span-1 font-gluten`}>
                    <AnimatedNumber  value={84} timeAnimation={5000}/>
                    Jumps
                </p>
                <p className={`${styles.stat} font-gluten`}>
                    <AnimatedNumber  value={4} timeAnimation={5000}/>
                    Drops
                </p>
            <p className={`${styles.stat} font-gluten`}>
                    <AnimatedNumber  value={116} timeAnimation={5000}/>
                    Appuis
                </p>
                <p className={`${styles.stat} col-span-1 font-gluten`}>
                    <AnimatedNumber  value={7} timeAnimation={5000}/>
                    River Gap
                </p>
                <p className={`${styles.stat} col-span-1 font-gluten`}>
                    <AnimatedNumber  value={96} timeAnimation={5000}/>
                    Virages relevés
                </p>
                <p className={`${styles.stat} font-gluten`}>
                        <AnimatedNumber  value={1} timeAnimation={5000}/>
                    Dalle Rocheuse
                </p>
            </div>
        </div>
                <Slider classname='lg:my-10 lg:py-20 col-span-10 lg:col-span-6'/>
    </div>
    {/* </LargeContainer> */}
    </div>
   
  );
}

export default Heroslider;



