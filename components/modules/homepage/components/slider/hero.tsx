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
import { Button } from '@/ui/design-system/button/button';
import crampons from "£/img/svg/crampons.svg";


 const Heroslider = () => {
  return (
      <div id='top' className='flex flex-wrap items-start relative  '>
      <LargeContainer className='lg:mt-0 px-6 py-16 min-h-screen relative divider-1 '>
      
      <Image src={"/img/hero/bgsapins_.webp"} alt="" priority fill sizes="100vw" className='w-full h-full object-cover brightness-75' />
    <div className='w-full relative z-20 lg:mb-10'> 
       <Image src={Logo} alt='Mont Poupet Bike Park' width={600} priority className='mx-auto'/>
       <h3 className='text-center text-white font-extrabold'>The Smiling Zone</h3>
    </div>
            <Image src={hand} width={400} alt='main de shapper' priority className='absolute -right-5 top-5 -rotate-90 z-10 hidden xl:block rotateAnime'/>
    <Container>
    <div className='w-full flex flex-col-reverse my-2 lg:mb-2 lg:flex-row items-center'>
        <div className='w-full lg:px-5 relative z-20 flex flex-col justify-center items-center'>
         
             <div className="w-fit mx-auto lg:px-10">
                            <Typography variant="h2" component="h1" theme="white" className="w-full mx-auto lg:w-fit text-center py-12 z-10 beforeLine font-extrabold">
                                Le Paradis du VTT&nbsp;!
                            </Typography>
                            <Typography variant="body-lg" component="h2" className="w-full lg:w-2/3 mx-auto text-center z-10 font-bold text-neutral-200">
                                Venez découvrir le Mont Poupet Bike Park, un bike park unique en son genre, situé à Salins-les-Bains dans le Jura.
                            </Typography>
                        </div>
            {/* <p className='pt-3 lg:pt-8 text-right w-full text-gray-700'>Président of the Mont Poupet Bike Park</p> */}
            <div className='flex gap-5 mt-10 w-full justify-center'>
                <Button baseUrl='/#asso' title='adhesion' linkType='internal' variant='accent' size='small'>Adhérer</Button>
                <Button baseUrl='/#plan' title='plan des pistes' linkType='internal' size='small' variant='outline' >Plan des pistes</Button>
            </div>

            <a href="#slider" className='hidden lg:block'>
                <Image src={crampons} alt='crampons' width={20} className='py-5 my-5'/>
            </a>
 
        </div>
    </div>
    </Container>
    </LargeContainer>
    <LargeContainer>
    <div className='w-full grid grid-cols-10 gap-10  pt-20 mb-5 place-content-center place-items-center relative z-30'>

    <div id='slider' className="w-fit max-w-xs md:max-w-none mx-auto col-span-10">
               <Typography variant="h2" component="h2" theme="black" className="w-full text-center z-10 pb-5 beforeLine2 relative">
              Le Bike Park du Mont Poupet
               </Typography>
        </div>
        <div className='col-span-10 lg:col-span-4'>
            
                <div className='w-full  my-5 '>
                    <Typography variant='h4' component='h4' className='text-center text-neutral-500'>
                        Des chiffres incroyables
                    </Typography>
                   
                    <hr />
                </div>
            <div className='gap-2 lg:gap-14 lg:max-w-2xl max-w-md grid grid-cols-3'>
            <p className={`${styles.stat} col-span-1 font-light text-neutral-600 `}>
                        <span>+<AnimatedNumber  value={20} timeAnimation={5000}/></span>
                    Km de trails
                </p>
                <p className={`${styles.stat} col-span-1 font-light text-neutral-600`}>
                    <AnimatedNumber  value={84} timeAnimation={5000}/>
                    Jumps
                </p>
                <p className={`${styles.stat} font-light text-neutral-600`}>
                    <AnimatedNumber  value={4} timeAnimation={5000}/>
                    Drops
                </p>
            <p className={`${styles.stat} font-light text-neutral-600`}>
                    <AnimatedNumber  value={116} timeAnimation={5000}/>
                    Appuis
                </p>
                <p className={`${styles.stat} col-span-1 font-light text-neutral-600`}>
                    <AnimatedNumber  value={7} timeAnimation={5000}/>
                    River Gap
                </p>
                <p className={`${styles.stat} col-span-1 font-light text-neutral-600`}>
                    <AnimatedNumber  value={96} timeAnimation={5000}/>
                    Virages relevés
                </p>               
            </div>
        </div>
                <Slider classname='lg:my-5 lg:py-10 col-span-10 lg:col-span-6'/>
   
    </div>
                </LargeContainer>
    </div>
  
   
  );
}

export default Heroslider;



