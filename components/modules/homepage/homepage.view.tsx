import Heroslider from "./components/slider/hero";
import InfoList from "./components/info/infoList";
import { PlanPiste } from "./components/pistes/plan";
import { Partenaires } from "./components/Partenaires/Partenaires";
// import { Footer } from "@/ui/components/navigation/footer";
import Adhesion from "./components/adhesion/adhesion.view";
import  {Testimonial}  from "./components/testimonial/testimonial.view";
import { Actus } from "./components/actu/actu";
import { actusContent } from "./components/actu/actu-content";

export const HomePage = () => {



    return (
        <>
            <Heroslider />
            {/* <Actus actus={actusContent} /> */}
            <InfoList />
            <PlanPiste />
            <Adhesion />
            <Testimonial />
            <Partenaires />
            {/* <Footer />            */}
        </>
    )
};