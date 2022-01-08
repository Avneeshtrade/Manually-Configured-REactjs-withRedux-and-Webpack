import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CustomCaptcha = (props) => {
    const [state, setState] = useState({ operations: ['*', '+', '-', '/'], num1: 0, num2: 0, upperlimit: 100000, lowerlimit: 100, operation: '*' })
    useEffect(() => {
        setState(s => ({
            ...s,
            num1: getRandomValue(),
            num2: getRandomValue(),
            operation: state.operations[Math.floor((Math.random() * state.operations.length) + 0)]
        }))
        setInterval(() => {
            setState(s => ({
                ...s,
                num1: getRandomValue(),
                num2: getRandomValue(),
                operation: state.operations[Math.floor((Math.random() * state.operations.length) + 0)]
            }))
        }, 10000)
    }, [])
    const getRandomValue = () => Math.floor((Math.random() * state.upperlimit) + state.lowerlimit)
    const getResult = () => {
        let result = 0;
        switch (state.operation) {
            case operations[0]:
                result = state.num1 * state.num2;
                break;
            case operations[1]:
                result = state.num1 + state.num2;
                break;
            case operations[2]:
                result = state.num1 - state.num2;
                break;
            case operations[3]:
                result = state.num1 / state.num2;
                break;
            default:
                break;
        }
        return result;
    }
    return (
        <div>
            <span>{`${state.num1} ${state.operation} ${state.num2} = `}<input type='text' name='result' /></span>
        </div>
    )
}

export default CustomCaptcha;