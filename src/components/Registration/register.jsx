import React from 'react'
import { useState } from 'react';
import CustomCaptcha from './captcha';

const RegistrationPage = (props) =>{
    const [state,setState] = useState({
        email:'',
        password:''
    })
    const onChangeHandler = (e) =>{
            setState(s=>({
                    ...s,
                    [e.target.name]:e.target.value
            }))
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            console.log(state);
    }
    return (
        <form onSubmit={submitHandler} style={{
    
            textAlign:'center'
        }}>
            <h1 style={{
                display:'block'
            }}>Registration Page  7</h1>
            <hr />
            <input type='email' name='email' placeholder="please enter valid email" value={state.email} onChange={onChangeHandler} />
            <hr />
            <input type='password' name='password' value={state.password} placeholder="enter password" onChange={onChangeHandler} />
            <hr />
            <CustomCaptcha />
            <hr />
            <input type='submit' value='Submit' />
        </form>
    )
}

export default RegistrationPage;