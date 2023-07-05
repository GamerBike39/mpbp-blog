import Heroslider from "./components/slider/hero";
import InfoList from "./components/info/infoList";
import { PlanPiste } from "./components/pistes/plan";
import { Partenaires } from "./components/Partenaires/Partenaires";
import Adhesion from "./components/adhesion/adhesion.view";
import  {Testimonial}  from "./components/testimonial/testimonial.view";


export const HomePage = () => {



    return (
        <>
            <Heroslider />
            <InfoList />
            <PlanPiste />
            <Adhesion />
            <Testimonial />
            <Partenaires />
        </>
    )
};