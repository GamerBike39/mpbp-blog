import { Container } from "@/components/container/container";
import AccordionMenu from "./accordeon";
import { FC } from 'react';

//images
import Image from "next/image";
import bg from '£/img/infolist/background.webp'
import tronc from '£/img/illustration/signalisation.png'

interface infoListProps {
 
}

const InfoList: FC<infoListProps> = ({  }) => {
  return (
    <div id='info' className="w-full pb-2 pt-10 relative min-h-[100lvh] md:min-h-screen divider-2">
        <Image src={bg} alt="illustration vélo" fill loading="lazy" placeholder="blur" className="brightness-50 object-cover object-center"/>
        <Image src={tronc} width={400} alt='panneau du bike park' loading="lazy" className='absolute -left-5 bottom-0 z-10 hidden xl:block'/>
    <Container>
        <div className="w-fit mx-auto">
            <h2 className="text-white text-4xl md:text-7xl font-extrabold relative z-10 py-12 beforeLine uppercase">Infos&nbsp;!</h2>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-5 min-h[100vh] ">
            <div className="w-full px-5 md:w-1/2 md:px-0">
                <AccordionMenu />
            </div>
        </div>
    </Container>
    </div>
  );
}

export default InfoList;