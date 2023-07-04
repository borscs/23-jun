import Button from "../../UI/Button";
import Input from "../../UI/Input";
import {useState} from "react";

const initialInput = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    'duration': 0,
}
const UserForm = (props) => {
    const [input, setInput] = useState(initialInput);

    const inputChangeHandler = (inputName, value) => {
        console.log(inputName, value);
        setInput({
            ...input,
            [inputName]: value
        });

    }
    const resetHandler = () => {
        setInput(initialInput);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log(input);
    }


    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input-group">
                <Input id="current-savings"
                       inputName="Current Savings ($)"
                       onChange={inputChangeHandler}
                />
                <Input id="yearly-contribution"
                       inputName="Yearly Savings ($)"
                       onChange={inputChangeHandler}
                />
            </div>
            <div className="input-group">
                <Input id="expected-return"
                       inputName="Expected Interest (%, per year)"
                       onChange={inputChangeHandler}
                />
                <Input id="duration"
                       inputName="Investment Duration (years)"
                       onChange={inputChangeHandler}
                />
            </div>
            <p className="actions">
                <Button type="reset" className="buttonAlt" FunName="Reset" onClick={resetHandler}/>
                <Button type="submit" className="button" FunName="Calculate"/>
            </p>
        </form>
    )
};


export default UserForm;