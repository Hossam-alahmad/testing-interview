type ErrorProps = React.ComponentProps<"span">;
const ErrorMsg = ({ children, className, ...rest }: ErrorProps) => {
    return (
        <span className={`text-red-500 text-xs ${className}`} {...rest}>
            {children}
        </span>
    );
};

export default ErrorMsg;
