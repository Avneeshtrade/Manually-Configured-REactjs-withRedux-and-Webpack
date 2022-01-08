import React from "react";
import {ExampleClass} from '../utility/math';

const Statistics = () =>{
    const stat = new ExampleClass();
    stat.method()
    return (
        <div>
            we are inside the Statistics
        </div>
    )
}

export default Statistics;