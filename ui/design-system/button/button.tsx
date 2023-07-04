import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType } from "@/lib/link-type";
// import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
size? : 'small' | 'medium' | 'large';
variant? : "accent" | "secondary" | "outline" | 'disabled' | "icon" | "succes"
icon? : IconProps;
iconTheme? : "accent" | "secondary" | "gray";
iconPosition? : "left" | "right";
disabled? : boolean;
isLoading? : boolean;
children? : React.ReactNode;
baseUrl? : string;
linkType? : LinkType;
action?: Function;
title: string;
type?: "button" | "submit" 
fullWidth?: boolean;

}

export  const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    title,
    fullWidth = false,
    type = "button",
    action = () => {}
        } : Props) => {

            let variantStyles: string = "",
                sizeStyles: string = "",
                icoSize : number = 0

            switch (variant) {
                case "accent": // default
                    variantStyles = "bg-green-600/90  hover:bg-green-400 text-neutral-100 rounded "
                    break;
                case "secondary":
                    variantStyles = "bg-red-200 hover:bg-primary-300/50 text-primary rounded"
                    break;
                case "outline":
                    variantStyles = "bg-white hover:bg-gray-800 hover:text-neutral-100 border border-gray-500 text-gray-900 rounded "
                    break;
                case "succes":
                        variantStyles = "bg-red-600 hover:bg-secondary-400 text-white rounded"
                        break;
                case "disabled":
                    variantStyles = "bg-neutral-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
                    break;
                case "icon":
                    if (iconTheme === "accent") {
                        variantStyles = "bg-black hover:bg-primary-400 text-white rounded-full"
                    } else if (iconTheme === "secondary") {
                        variantStyles = "bg-red-200 hover:bg-primary-300/50 text-primary rounded-full"
                    } else if (iconTheme === "gray") {
                        variantStyles = "bg-red-800 hover:bg-gray-700 text-white rounded-full"
                    }
                    break;
               
            }

            switch (size) {
                case "small":
                    sizeStyles = `text-caption3 font-medium ${
                        variant === "icon" 
                        ? "flex items-center justify-center w-[40px] h-[40px]" 
                        : "px-[14px] py-[12px]"
                    }`
                    icoSize = 18
                    break;
                case "medium": // default
                    sizeStyles = `text-caption2 font-medium ${
                        variant === "icon" 
                        ? "flex items-center justify-center w-[50px] h-[50px]" 
                        : "px-[18px] py-[15px]"
                    }`
                    icoSize = 20
                    break;
                case "large":
                    sizeStyles = `text-caption1 font-medium  ${
                        variant === "icon"
                        ? "flex items-center justify-center w-[60px] h-[60px]" 
                        : "px-[22px] py-[18px]"
                    }`;
                    icoSize = 24
                    break;
            }

    const handleClick = () => {
        if (action) {
            action()
        }
    }        

    const buttonContent = (
        <>
         {/* If the button is loading, show the spinner */}
         {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === 'icon' ? (  <Spinner size="small" variant='white'/>) : (  <Spinner size="small"/>)}
                </div>)}
            <div className={clsx(isLoading && "invisible")}>
            
              {icon && variant === 'icon' ? (
                <icon.icon size={icoSize} />
              ) : (
                <div className={clsx(icon && 'flex items-center gap-2')}>
                  {/* If the icon exists and is on the left, show it */}
                  {icon && iconPosition === 'left' && (
                    <icon.icon size={icoSize} />
                  )}
                  {children}
                  {/* If the icon exists and is on the right, show it */}
                  {icon && iconPosition === 'right' && (
                    <icon.icon size={icoSize} />
                  )}
                </div>
              )}
        </div>
        </>
    )

    const buttonElement = (
        <motion.button
        type={type}
        className={clsx(variantStyles, icoSize, sizeStyles, isLoading && 'cursor-not-allowed', 'relative bg-black!', fullWidth && 'w-full')}
        onClick={handleClick}
        disabled={disabled || isLoading ? true : false}
        role="button"
        title={title}
        whileHover={{ scale: 1.1, type: 'spring' }}
        // exit={{ opacity: 0.1, transition: { duration: 0.1 } }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {buttonContent}
      </motion.button>
    )


    if (baseUrl) {
        // si il y a un lien on fait des choses
        if (linkType === LinkType.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank" rel="noopener noreferrer">
                    {buttonElement}
                </a>
            )
        } else if (linkType === LinkType.INTERNAL) {
            return (
                <a href={baseUrl}>
                    {buttonElement}
                </a>
            )
        
    }
}
    return buttonElement
    
    

}