import React from "react";
import { ColorsProps } from "../constant/types/ColorTypes";
import utils from "../utils/funtions";

type VarientProps = "fill" | "outlined" | "transparent";
type DButtonProps = {
    bgColor?: ColorsProps;
    borderColor?: ColorsProps;
    variant?: VarientProps;
    type: "button" | "submit";
    className?: string;

    children: React.ReactNode;
} & React.ComponentProps<"button">;

const varientType = (
    variant: VarientProps,
    bgColor: ColorsProps,
    borderColor: ColorsProps
) => {
    return {
        fill: `${utils.bgColorScheme(bgColor)} `,
        outlined: `border ${utils.borderColorScheme(borderColor)} `,
        transparent: "bg-transparent",
    }[variant];
};

const DButton = ({
    bgColor = "primary",
    borderColor = bgColor,
    variant = "fill",
    type = "button",
    className,
    disabled,
    children,
    ...rest
}: DButtonProps) => (
    <button
        type={type}
        disabled={disabled}
        className={`p-2 transition-all outline-none rounded-sm ${varientType(
            variant,
            bgColor,
            borderColor
        )} ${className}`}
        {...rest}
    >
        {children}
    </button>
);

export default DButton;
