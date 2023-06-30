import Link from "next/link"
import { partnerContent } from "./partnerContent";
import Image from 'next/image';
import { Container } from "@/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography"

export const Partenaires = () => {

    const partnerList = partnerContent.map((partner, index) => {
        return (
            <div key={index} className="col-span-4 md:col-span-1 rounded">
                <Link href={partner.link}>
                <Image src={partner.logo} alt={partner.link} width={200}  className="rounded shadow-xl"/>
                </Link>
            </div>
        )

    })

    return (
        
        <div className="containerBorderGreen pt-10 pb-24">
        <Container className="">
        <div className="w-fit mx-auto">
                        <Typography variant="h2" component="h5" theme="black" className="w-fit text-center py-12 z-10 beforeLine">
                            Nos partenaires
                        </Typography>
                    </div>
            <div className="grid grid-cols-4 gap-4 place-content-center place-items-center">
                {partnerList}
            </div>
        </Container>
        </div>
    )

}; 