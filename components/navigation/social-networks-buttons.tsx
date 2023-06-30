import { Button } from "@/ui/design-system/button/button";
import { footerSocialLinks } from "./appLinks";
import { v4 as uuidv4 } from "uuid"
import clsx from "clsx";

// icons
import {FaWindowClose} from "react-icons/fa"



interface Props {
    theme? : "gray" | "accent" | "secondary";
    classNameUl? : string;
}



export const SocialNetworksButtons = ({classNameUl, theme = "accent"}:Props) => {

    

    const iconList = footerSocialLinks.map((socialNetwork)=>{
        return (
            <li  key={uuidv4()}>
        <Button
        size="medium"
        variant="icon"
        iconTheme={theme}
        icon={{icon : socialNetwork.icon
                ? socialNetwork.icon
                : FaWindowClose }}
        baseUrl={socialNetwork.baseUrl}
        linkType={socialNetwork.type}
        title={"bouton vers " + socialNetwork.label}
        />
        </li>
      
        )
    })

    return (
        <ul className={clsx(classNameUl, "flex items-center gap-2.5")}>
            {iconList}
        </ul>
    )

};