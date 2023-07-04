const Button = (props) => {
    return (
        <button type={props.type} className={props.className}>
            {props.FunName}
        </button>
    )
};

export default Button;