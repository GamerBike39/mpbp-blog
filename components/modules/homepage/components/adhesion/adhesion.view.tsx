import { Container } from '@/components/container/container';
import Image from 'next/image';
import { BtnAdherer } from '../info/BtnAdherer';


// images
import melvil from '£/img/asso/melvilChaussettes.png'
import mathis from '£/img/asso/shapeMathis.jpg'
import arrow from '£/img/svg/arrow.svg'
import { SliderShape } from './component/sliderShape';

const Adhesion = () => {

    return (
        <>
        <div id='adhesion' className='py-10'>
            <div className="w-fit mx-auto">
                <h2  className="w-fit text-center py-12 z-10 beforeLine text-neutral-900">
                    Association
                </h2>
            </div>
        
        <Container className='bg-white/70'>

            <h3 className="max-w-xl mx-auto py-12 z-10 text-gray-600">
                Le Mont Poupet Bike Park est une association loi 1901. Elle a pour but de développer et d&apos;entretenir le bike park du Mont Poupet.
            </h3>

            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/2">
                    <p className="w-fit py-5 z-10 font-gluten font-light text-neutral-900">
                        En adhérant à l&apos;association vous <span className='font-bold'>soutenez</span> le projet et vous nous aidez à le <span className="font-bold">développer</span><br/> Soyez <span className="font-bold">acteur</span> de votre BikePark
                    </p>
                    <p className="w-fit z-10 border-b-2 text-neutral-900 font-bold">
                       Tarif : 
                    </p>
                   <div className="grid grid-cols-2 gap-1 font-light">
                        <div className="py-2">Sans goodies</div>
                        <div className="py-2 font-normal">20€</div>

                        <div className="relative py-2">
                            Avec Chaussettes
                            <Image src={arrow} alt="arrow" width={500} height={50} className="hidden lg:block absolute top-8 -right-56 translate-x-1/2 -translate-y-1/2 rotate-[20deg]" />
                        </div>
                        <div className="py-2 font-normal">25€</div>

                        <div className="py-2">Avec T-shirt</div>
                        <div className="py-2 font-normal">35€</div>

                        <div className='col-span-2 mr-auto'
                        ><BtnAdherer/></div>

                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src={melvil} alt="Melvil" width={400}/>
                </div>

            </div>
                <hr />
                <div className="w-fit mx-auto mt-10 mb-28 py-10">
                <h2  className="w-fit text-center py-12 z-10 beforeLine text-neutral-900">
                    Shape
                </h2>

                <div className='grid grid-cols-2 gap-1'>
                    <div className='col-span-2 lg:col-span-1'>
                        <Image src={mathis} alt="Mathis" width={400} className='rounded'/>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <p  className="w-fit py-5 z-10 font-gluten font-light text-neutral-900">
                            Toi aussi tu veux devenir <span className='animate-pulse font-bold'>fort</span> comme Mathis&nbsp;?<br/> <span className="animate-pulse font-bold">Rejoins</span> l&apos;équipe de shapeurs et viens nous aider à entretenir le bike park.
                        </p>
                        <SliderShape/>
                    </div>
                </div>

            </div>
        </Container>
        
        </div>
        </>
    )
};

export default Adhesion;