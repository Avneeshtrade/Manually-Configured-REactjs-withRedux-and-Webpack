import React, { SyntheticEvent, useEffect, useState } from 'react';
import { KEY_WORDS } from '../constants/apiConstant';
import { getData } from '../utility/api';

const DynamicTable = (props) => {

    const [state,setState] = useState({
        text:'cannabis',
        size:3,
        data:[]
    });
    const changeHandler = (e) =>{
        setState(s=>({
            ...s,
            [e.target.name]:e.target.value    
        }))
    }
    useEffect(()=>{
        if(state.text && state.size){
            getData(`https://random-data-api.com/api/${state.text}/random_${state.text}?size=${state.size}`)
            .then(res=>{
                setState(s=>({
                    ...s,
                    data:res
                }))
            });
        }
        else{
            setState(s=>({
                ...s,
                data:[]
            }))
        }
    },[state.text,state.size])
    return (
        <div>
            <div>
                <input 
                type='text' 
                name="text" 
                disabled={true}
                style={{
                    position:'relative',
                    float:'left'
                }}
                value={state.text} 
                onChange={changeHandler}
                />
                <select 
                value={state.text} 
                name='text' 
                onChange={changeHandler}
                style={{
                    position:'relative',
                    left:'40%'
                }}
                >
                    {
                        KEY_WORDS.map((k,i)=>{
                            return (
                                <option key={i} value={k}>{k}</option>
                            )
                        })
                    }
                </select>
                <input 
                type='number' 
                name='size'
                style={{
                    position:'relative',
                    float:'right'
                }} 
                value={state.size} 
                onChange={changeHandler}
                />
            </div>
            <div style={{height:'80vh',width:'98vw',overflow:'scroll'}}>
                {
                    state.data && state.data.length && state.data.length > 0 &&
                            <table style={{
                                borderBlockColor:'GrayText',
                                border:'2px solid black'
                                
                            }}
                            cellSpacing={0}
                            cellPadding={5}
                            >
                                <thead>
                                    <tr>
                                    {
                                        Object.keys(state.data.at(0)).map((h,i)=>{
                                            return (
                                                <th key={i} style={{
                                                    border:'1px solid black'
                                                }}>{h}</th>
                                            )
                                        })
                                    }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.data.map((b,i)=>{
                                            return (
                                                <tr key={i}>
                                                    {
                                                        Object.keys(state.data.at(0)).map((h,i)=>{
                                                            return (
                                                                <td key={i} style={{
                                                                    border:'1px solid black'
                                                                }}>{b[`${h}`]}</td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>                   
                }
            </div>
        </div>
    )
}
export default DynamicTable;