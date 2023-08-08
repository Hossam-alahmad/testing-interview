import React, { forwardRef } from "react";
import DLabel from "../DLabel";
import ErrorMsg from "./ErrorMsg";
import { InputProps } from "../../constant/types/InputsTypes";
import { ColorsProps } from "../../constant/types/ColorTypes";
import utils from "../../utils/funtions";
type SelectInputProps = {
    bgColor?: ColorsProps;
} & InputProps &
    React.ComponentProps<"select">;
const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
    (
        {
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
                <select
                    ref={ref}
                    {...rest}
                    name={name}
                    className={` p-2 rounded-sm w-full outline-none text-sm ${utils.bgColorScheme(
                        bgColor
                    )}   ${className}`}
                >
                    {children}
                </select>
                {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
            </div>
        );
    }
);

export default SelectInput;
