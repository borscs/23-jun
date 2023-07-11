const Input = (props) => {
    return (
        <p>
            <label htmlFor={props.id}>{props.inputName}</label>
            <input type="number"
                   id={props.id}
                   ref={props.references}
            />
        </p>
    )
};

export default Input;