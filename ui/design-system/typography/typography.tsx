import clsx from "clsx";

interface Props {
    variant?: "display"|"h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-lg" |"body-base" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    component? : "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div" | "li";
    theme? : "black" | "white"| "gray" | 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    weight? : "regular" | "medium" | "bold";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component : Component = "div",
    theme = "black",
    weight = 'regular',
    children, className 
    }: Props) => {

    let variantStyles : string = "", colorStyles : string = "", weightStyles : string = "";
    switch (variant) {
        case "display":
            variantStyles = "text-5xl lg:text-8xl"
            break;
        case "h1":
            variantStyles = "text-5xl lg:text-7xl"
            break;
        case "h2":
            variantStyles = "text-4xl md:text-7xl"
            break;
        case "h3": // default
            variantStyles = "text-3xl md:text-5xl lg:text-6xl"
            break;
        case "h4":
            variantStyles = "text-2xl md:text-4xl lg:text-5xl"
            break;
        case "h5":
            variantStyles = "text-xl md:text-2xl lg:text-3xl"
            break;
        case "lead":
            variantStyles = "text-2xl"
            break;
        case "body-lg":
            variantStyles = "text-lg"
            break;
        case "body-base":
            variantStyles = "text-base"
            break;
        case "caption1":
            variantStyles = "text-caption1"
            break;
        case "caption2":
            variantStyles = "text-caption2 "
            break;
        case "caption3":
            variantStyles = "text-caption3 "
            break;
        case "caption4":
            variantStyles = "text-sm md:text-md"
            break;
    }

    switch (theme) {
        case "black":
            colorStyles = " text-gray"
            break;
        case "white":
            colorStyles = " text-white"
            break;
        case "gray":
            colorStyles = " text-gray-700"
            break;
        case "primary":
            colorStyles = "text-primary"
            break;
        case "secondary":
            colorStyles = "text-secondary"
            break;
        case "danger":
            colorStyles = "text-alert-danger"
            break;
        case "success":
            colorStyles = "text-alert-success"
            break;
        case "warning":
            colorStyles = "text-alert-warning"
            break;
    }

    switch (weight) {
        case "medium":
            weightStyles = "font-medium"
            break;
        case "bold":
            weightStyles = "font-bold"
            break;
    }

    return <Component className={clsx(variantStyles, weightStyles, colorStyles, className)}>{children}</Component>
}