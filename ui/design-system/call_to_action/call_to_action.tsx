import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkType } from "@/lib/link-type"
import Image from "next/image"

// image
import Bomb from '£/images/cta/bomb.svg'


interface CallToActionProps {
    content: string
    btn : string
    link: string
    imagePath? : any
}

export const CallToAction  = () => {
    return (
        <>
        <div className="relative overflow-hidden bg-primary	">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        Viens te former gratuitement !
                    </Typography>
                    <div>
                        <Button title="commencer" variant="succes" size="medium" baseUrl="#/" linkType={LinkType.EXTERNAL}>
                            Formation gratuite !
                        </Button>
                    </div>
                </div>
                <div>
                    <Image
                    src={Bomb}
                    alt="illustration" 
                    width={1210}
                    height={1210}
                    className="absolute -bottom-[458px] -right-[150px] z-0"   
                    />
                </div>
            </Container>
        </div>
        </>
    )
}