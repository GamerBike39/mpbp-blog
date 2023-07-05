'use client';
import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import Link from "next/link"

// link
import { CustomLink } from "./customLink"
import { footerLinks } from "./appLinks"

// types
import { FooterLinks } from "@/types/app-links"
import { LinkType } from "@/lib/link-type"
import { SocialNetworksButtons } from "./social-networks-buttons"
// *****************************************************

import insta from "£/img/svg/Insta.svg"
import helloasso from "£/img/svg/helloasso.svg"

interface Props {

}

export const Footer = ({} : Props) => {

    // current year
    const currentYear = new Date().getFullYear();

    // footer navigation list link mapping
    const FooterNavigationList = footerLinks.map((columnLinks) => {
        return (
            <FooterLink data={columnLinks} key={columnLinks.label}/>
        )
    })





    return (
        <footer className="bg-gray-900 relative">
            <Container className="flex flex-col md:flex-row justify-between pt-10">

              {/* cta */}
              <div className="flex flex-col items-center gap-1">
                <Typography variant="caption1" theme="white">
                    Rejoindre la Smiling Zone
                </Typography>
                <Typography variant="caption3" theme="white" className="font-extrabold">
                    Abonne toi à notre Instagram
                </Typography>
                <Link href="https://www.instagram.com/montpoupetbikepark/" target="_blank" aria-label="Instagram">
                <Image src={insta} alt="instagram" width={100} />
                </Link>
              </div>
                <hr className="bg-white/25 my-10 lg:hidden" />
              <div className="flex flex-col items-center gap-1 mt-7 lg:mt-0">
              <Typography variant="caption1" theme="white">
                    Tu veux adhérer ?
                </Typography>
                <Typography variant="caption3" theme="white" className="font-extrabold">
                    Inscris toi avec HelloAsso
                </Typography>
                  <Link href="https://www.helloasso.com/associations/muddy-bike-crew/adhesions/adhesions-2023-association-mont-poupet-bike-park" target="_blank" aria-label="Hello Asso">
                    <Image src={helloasso} alt="HelloAsso" width={100} />
                    </Link>
              </div>

                {/* liste de liens */}
              <div className="flex gap-7 flex-col md:flex-row text-white">
                {FooterNavigationList}
              </div>
            </Container>

            {/* bottom footer */}
            <Container className="pt-5 pb-10 space-y-2">
                <hr  className="text-gray-800"/>
                <div className="flex justify-between items-center">
                    <ul>
                        <Typography variant="caption4" theme="white" component="li">
                           Fait avec ❤️ par <CustomLink href="https://google.com" target="_blank" title="GamerBike" className="!text-white/70 hover:!text-white"/>  {currentYear}
                        </Typography>
                    </ul>
                        {/* <SocialNetworksButtons
                        theme="gray"
                        /> */}
                 </div>
            </Container>
        </footer>
    )

}


interface footerLinkProps {
 data : FooterLinks;
}
const FooterLink = ({data}: footerLinkProps) => {

    const linkList = data.links.map((link) => { return (
        <Typography variant="caption3" theme="white" component="li" key={link.label+'id'}>
        {link.type === LinkType.INTERNAL ? (
            <CustomLink href={link.baseUrl} title={link.label} className="!text-white/80 hover:!text-white transition"/>) : (
                <CustomLink href={link.baseUrl} target="_blank" title={link.label}  className="!text-white/80 hover:!text-white transition"/>)}
        </Typography>)
    })

    return (
        <div className="min-w-[200px]">
            <Typography variant="caption2" theme="white" weight="medium" className="py-5">
                {data.label}
            </Typography>
            <ul className="space-y-4">
                {linkList}
            </ul>  
        </div>
    )
}