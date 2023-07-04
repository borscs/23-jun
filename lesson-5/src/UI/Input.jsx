const Input = (props) => {
    return (
        <p>
            <label htmlFor={props.id}>{props.inputName}</label>
            <input type="number"
                   id={props.id}
                   onChange={(event) => props.onChange( props.id ,event.target.value)}
            />
        </p>
    )
};

export default Input;