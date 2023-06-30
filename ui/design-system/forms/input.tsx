import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading : boolean;
    placeholder : string;
    type? : "email" | "password" | "text";
    isAutoComplete? : "on" | "off";
    register : any;
    errors : any;
    errorMessage? : string;
    id : string;
    required? : boolean;
    pattern? : RegExp
}



export const Input = ({isLoading,
    placeholder,
    type = "text",
    isAutoComplete = "off",
    register,
    errors,
    errorMessage = "Tu dois renseigner ce champ",
    id,
    required = true,
    pattern}:Props) => {

    return (

        <div className="space-y-2">
            <input type={type} placeholder={placeholder}
            className={clsx(
                isLoading ? "cursor-not-allowed" : "cursor-pointer",
                errors[id] ? "border-alert-danger" : "border-gray-700",
                "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-700",
            )}
            disabled={isLoading}
            {...register(id, { required: {
            value: required,
            message: errorMessage
             },
            pattern: pattern
                })}
                autoComplete={isAutoComplete  ? "on" : "off"}
                />

                {errors[id] && (
                    <Typography variant="caption4" component="div" theme="danger">
                        {errors[id]?.message}
                    </Typography>
                )}
        </div>
    )
}