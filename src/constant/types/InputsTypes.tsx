import { ColorsProps } from "./ColorTypes";

export type InputProps = {
    color?: string;
    id: string;
    name: string;
    label?: string;
    labelColor?: ColorsProps;
    errorMsg?: string;
};
