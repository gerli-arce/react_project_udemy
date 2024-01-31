import {useState} from "react";

 export const ConterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const counterIncrement = () => setCounter(c => c + 1);

    const multiplicateBy2 = () => setCounter(c => c * 2);

    const resetValue = () => setCounter(c=> {return c = value});

    return  <>
        <h2>El valor del contador es {counter}</h2>
        <button onClick={counterIncrement}>Incrementar contador +1</button>
        <button onClick={multiplicateBy2}> Multiplicar por 2</button>
        <button onClick={resetValue}>Resetear valor</button>
    </>
    
 }