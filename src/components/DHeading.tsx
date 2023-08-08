import { Heading } from "@chakra-ui/react";
import React from "react";

type DHeadingProps = {
    as: "h1" | "h2" | "h3" | "h4" | "h4" | "h5" | "h6";
    children: React.ReactNode;
} & React.ComponentProps<"h1">;

const fontSize = (as: string) =>
    ({
        h1: ["xl", "2xl", "3xl"],
        h2: ["lg", "xl", "2xl"],
        h3: ["md", "lg", "xl"],
        h4: ["sm", "md", "lg"],
        h5: ["xs", "sm", "md"],
        h6: "xs",
    }[as]);
const DHeading = ({ as = "h1", children, ...rest }: DHeadingProps) => {
    return (
        <Heading as={as} size={fontSize(as)} {...rest}>
            {children}
        </Heading>
    );
};

export default DHeading;
