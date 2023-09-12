import {useState} from "react";

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }

   return(
    <div>
        <h2>Hello World!</h2>
        {!changeText && <p>It's good to see you!</p>}
        {changeText && <p>Changed!</p>}
        <button onClick={changeTextHandler}></button>
    </div>
   )
};


export default Greeting;