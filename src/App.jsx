/* eslint no-eval: 0*/

// importación
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import './App.css';

// generacion de la funcion del componente
// Funcion flecha o Arrow Function
const App = () => {

    // Array destructuring
    // 1er posicion: valor (que inicialmente es )
    // 2da posicion: función que me va a permitir
    // [xxxx], [setxxxx] - convención
    const [stack, setStack] = useState("")


    const items = words(stack, /[^-^+^*^/]+/g)

    // Lo que ejecuta la función

    const value = items.length > 0 ? items[items.length-1] : 0;
    return (
    <main className="react-calculator">
        <Result value={value.toString()} />
        <Numbers
            onClickNumber=
            {number => {
                setStack(`${stack}${number}`)
            }} />
        <Functions onContentClear={() => {
            setStack('')
        }}
            onDelete={() => {
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations onClickOperation={operation => {
            setStack(`${stack}${operation}`)
        }}
            onClickEqual={equal => {
                setStack(eval(stack).toString())
            }} />
    </main>)
}

// exportación

export default App