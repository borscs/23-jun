import Button from "../../UI/Button";
import Input from "../../UI/Input";
import {useRef} from "react";

const UserForm = (props) => {
    const currentSaving = useRef();
    const yearly = useRef();
    const expectedReturn = useRef();
    const duration = useRef();


    const resetHandler = () => {
        currentSaving.current.value = null;
        yearly.current.value = null;
        expectedReturn.current.value = null;
        duration.current.value = null;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log({
            'current-savings':  currentSaving.current.value,
            'yearly-contribution':  yearly.current.value,
            'expected-return':  expectedReturn.current.value,
            'duration': duration.current.value,
        });
    }


    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input-group">
                <Input id="current-savings"
                       inputName="Current Savings ($)"
                       references={currentSaving}
                />
                <Input id="yearly-contribution"
                       inputName="Yearly Savings ($)"
                       references={yearly}
                />
            </div>
            <div className="input-group">
                <Input id="expected-return"
                       inputName="Expected Interest (%, per year)"
                       references={expectedReturn}
                />
                <Input id="duration"
                       inputName="Investment Duration (years)"
                       references={duration}
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