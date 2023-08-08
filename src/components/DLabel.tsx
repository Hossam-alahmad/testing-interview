import { ColorsProps } from "../constant/types/ColorTypes";
import utils from "../utils/funtions";
type DLabelProps = {
    id?: string;
    children?: string;
    className?: string;
    color: ColorsProps;
} & React.ComponentProps<"label">;

const DLabel = ({
    id,
    color = "default",
    className,
    children,
    ...rest
}: DLabelProps) => {
    return (
        <label
            htmlFor={id}
            className={`block mb-1 text-primary-color text-[.8rem] md:text-[0.9rem] ${utils.textColorScheme(
                color
            )} ${className}`}
            {...rest}
        >
            {children}
        </label>
    );
};

export default DLabel;
