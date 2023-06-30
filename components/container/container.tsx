import clsx from "clsx";

interface Props {
    children : React.ReactNode;
    className? : string;

}

export const Container = ({children, className} : Props) => {


    return (
        
            <div className={clsx(className, 'w-full max-w-7xl px-5 mx-auto lg:px-10')}>
                {children}
            </div>
        
    )

}

export const LargeContainer = ({children, className} : Props) => {


    return (
        
            <div className={clsx(className, 'w-full px-5 mx-auto lg:px-10')}>
                {children}
            </div>
        
    )

}