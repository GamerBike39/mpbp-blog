import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
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
            <FooterLink data={columnLinks} key={uuidv4()}/>
        )
    })



    return (
        <footer className="bg-gray">
            <Container className="flex flex-col md:flex-row justify-between pt-16">

              {/* cta */}
              <div className="flex flex-col items-center gap-1">
                <Typography variant="caption1" theme="white">
                    Rejoindre la Smiling Zone
                </Typography>
                <Typography variant="caption3" theme="gray">
                    Abonne toi à notre Instagram
                </Typography>
                <Link href="https://www.instagram.com/montpoupetbikepark/" target="_blank" aria-label="Instagram">
                <Image src={insta} alt="instagram" width={200} />
                </Link>
              </div>
                <hr className="bg-white/25 my-10 lg:hidden" />
              <div className="flex flex-col items-center gap-1 mt-7 lg:mt-0">
              <Typography variant="caption1" theme="white">
                    Tu veux adhérer ?
                </Typography>
                <Typography variant="caption3" theme="gray">
                    Inscris toi avec HelloAsso
                </Typography>
                  <Link href="https://www.helloasso.com/associations/muddy-bike-crew/adhesions/adhesions-2023-association-mont-poupet-bike-park" target="_blank" aria-label="Hello Asso">
                    <Image src={helloasso} alt="HelloAsso" width={200} />
                    </Link>
              </div>

                {/* liste de liens */}
              <div className="flex gap-7 flex-col md:flex-row text-white">
                {FooterNavigationList}
              </div>
            </Container>

            {/* bottom footer */}
            <Container className="pt-9 pb-11 space-y-11">
                <hr  className="text-gray-800"/>
                <div className="flex justify-between items-center">
                    <ul>
                        <Typography variant="caption4" theme="gray" component="li">
                           Fait avec ❤️ par <CustomLink href="https://google.com" target="_blank" title="GamerBike" className="text-white hover:text-primary-300"/>  {currentYear}
                        </Typography>
                    </ul>
                        <SocialNetworksButtons
                        theme="gray"
                        />
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
        <Typography variant="caption3" theme="gray" component="li" key={uuidv4()}>
        {link.type === LinkType.INTERNAL ? (
            <CustomLink href={link.baseUrl} title={link.label} className="text-white/75"/>) : (
                <CustomLink href={link.baseUrl} target="_blank" title={link.label}  className="text-white/75"/>)}
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