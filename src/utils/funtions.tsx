import { ColorsProps } from "../constant/types/ColorTypes";

const bgColorScheme = (bgColor: ColorsProps) => {
    return {
        primary: "bg-primary-color",
        secondary: "bg-secondary-color",
        third: "bg-third-color",
        forth: "bg-forth-color",
        success: "bg-success-color",
        danger: "bg-danger-color",
        warning: "bg-warning-color",
        default: "bg-text-color",
    }[bgColor];
};
const varColorScheme = (color: ColorsProps) => {
    return {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
        forth: "var(--forth-color)",
        success: "var(--success-color)",
        danger: "var(--danger-color)",
        warning: "var(--warning-color)",
        default: "var(--text-color)",
    }[color];
};
const textColorScheme = (color: ColorsProps) => {
    return {
        primary: "text-primary-color",
        secondary: "text-secondary-color",
        third: "text-third-color",
        forth: "text-forth-color",
        success: "text-success-color",
        danger: "text-danger-color",
        warning: "text-warning-color",
        default: "text-text-color",
    }[color];
};
const borderColorScheme = (borderColor: ColorsProps) =>
    ({
        primary: "border-primary-color",
        secondary: "border-secondary-color",
        third: "border-third-color",
        forth: "border-forth-color",
        success: "border-success-color",
        danger: "border-danger-color",
        warning: "border-warning-color",
        default: "border-text-color",
    }[borderColor]);
export default {
    bgColorScheme,
    varColorScheme,
    textColorScheme,
    borderColorScheme,
};
