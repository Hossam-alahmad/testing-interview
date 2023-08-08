import React, { forwardRef } from "react";
import { InputProps } from "../../constant/types/InputsTypes";

import DLabel from "../DLabel";
import ErrorMsg from "./ErrorMsg";
import utils from "../../utils/funtions";
import { ColorsProps } from "../../constant/types/ColorTypes";
type TextInputProps = {
    type: "email" | "text" | "password";
    bgColor?: ColorsProps;
} & InputProps &
    React.ComponentProps<"input">;
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            type,
            label,
            name,
            id,
            labelColor = "default",
            bgColor = "secondary",
            className,
            errorMsg,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <div>
                {label && (
                    <DLabel color={labelColor} id={id}>
                        {label}
                    </DLabel>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        name={name}
                        type={type}
                        {...rest}
                        className={` p-2 rounded-sm w-full outline-none  text-sm ${utils.bgColorScheme(
                            bgColor
                        )}  ${className}`}
                    />
                    {children}
                </div>
                {errorMsg && <ErrorMsg className="mt-1">{errorMsg}</ErrorMsg>}
            </div>
        );
    }
);

export default TextInput;
