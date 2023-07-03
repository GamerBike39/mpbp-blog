'use client';
import { LargeContainer } from "@/components/container/container"
import { Slider } from "./testi-slider"
import { Typography } from "@/ui/design-system/typography/typography"


export const Testimonial = () => {
    return (
        <LargeContainer className="lg:my-12 lg:py-10">
             <div className="w-fit mx-auto">
                <Typography variant="h2" component="h2" theme="black" className="w-fit text-center pb-6 lg:py-12 z-10 beforeLine">
                    Témoignages
                </Typography>
            </div>
            <Slider />
        </LargeContainer>
    )
}