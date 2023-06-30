import { Navigation } from '@/components/navigation/navigation';
// import { Footer } from '@/ui/components/navigation/footer';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

interface Props {
    children : React.ReactNode;
    isDisplayBreadcrumbs?: boolean;
}


export const Layout = ({children, isDisplayBreadcrumbs = true}:Props) => {
    return (
        <>
            <Navigation />
           {isDisplayBreadcrumbs && <Breadcrumbs />}   
            {children}
            {/* <Footer /> */}
        </>
    )
}