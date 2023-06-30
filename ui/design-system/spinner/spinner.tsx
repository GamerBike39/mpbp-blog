import clsx from "clsx";
import  style  from "./spinner.module.css";
interface Props {
    size? : 'small' | 'medium' | 'large';
    variant? : "primary" | "white" ;
    className?: string;
}

export const Spinner = ({size = "medium", variant = 'primary', className} : Props) => {

let variantStyles : string = "", sizeStyles : string = "";

switch (size) {
    case "small":
        sizeStyles = "w-5 h-5"
        break;
    case "medium": // default
        sizeStyles = "w-9 h-9"
        break;
    case "large":
        sizeStyles = "w-12 h-12"
        break;
}

switch (variant) {
    case "primary": // default
        variantStyles = "text-primary"
        break;
    case "white":
        variantStyles = "text-white"
        break;
}


return (
<svg className={clsx(variantStyles, sizeStyles, style.svgSpinner)} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle className={style.circleSpinner} cx="50" cy="50" r="45"/>
</svg>
)

}