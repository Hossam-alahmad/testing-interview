import React from "react";
import { ColorsProps } from "../constant/types/ColorTypes";
import utils from "../utils/funtions";
type DBoxProps = {
    bgColor?: ColorsProps;
    children?: React.ReactNode;
    className?: string;
};

const DBox = ({ bgColor = "secondary", children, className }: DBoxProps) => {
    return (
        <div
            className={`${utils.bgColorScheme(
                bgColor
            )} rounded-sm p-2 ${className}`}
        >
            {children}
        </div>
    );
};

export default DBox;
