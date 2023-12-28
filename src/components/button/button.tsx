interface Props extends React.ComponentPropsWithRef<"button"> {
    label: string;
    color: string;
}

export const Button: React.FC<Props> = (props) => {
    const { label, color, ...restProps } = props;
    return (
        <button style={{ color: color }} {...restProps}>
            {label}
        </button>
    );
};
