import { forwardRef } from "react";
import { CheckboxProps, Checkbox } from "@chakra-ui/react";
import { InputProps } from "../../constant/types/InputsTypes";
import { ColorsProps } from "../../constant/types/ColorTypes";
import ErrorMsg from "./ErrorMsg";
import DLabel from "../DLabel";
import utils from "../../utils/funtions";

type CheckboxInputProps = {
    color?: ColorsProps;
    bgColor?: ColorsProps;
} & InputProps &
    CheckboxProps;

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
    (
        {
            id,
            name,
            label,
            labelColor = "default",
            errorMsg,
            bgColor = "secondary",
            color = "primary",
            ...rest
        },
        ref
    ) => {
        return (
            <div>
                <div className="flex items-center">
                    <Checkbox
                        className={`border-transparent rounded-sm ${utils.bgColorScheme(
                            bgColor
                        )}`}
                        {...rest}
                        ref={ref}
                        name={name}
                        sx={{
                            "span.chakra-checkbox__control[data-checked]": {
                                backgroundColor: utils.varColorScheme(color),
                                borderColor: utils.varColorScheme(color),
                            },
                        }}
                    />
                    {label && (
                        <DLabel
                            color={labelColor}
                            className="ms-2 mb-[0_!important]"
                            id={id}
                        >
                            {label}
                        </DLabel>
                    )}
                </div>
                {errorMsg && (
                    <ErrorMsg className="block mt-1">{errorMsg}</ErrorMsg>
                )}
            </div>
        );
    }
);

export default CheckboxInput;
