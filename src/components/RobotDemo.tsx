import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchRobots from '../actions/robotActions';

interface reducerProps {
    RobotReducer:{
        loading:boolean,
        data:string,
        error:string
    }
}
const RobotDemo = () => {
    const robots = useSelector((state:reducerProps)=> state.RobotReducer);
    const dispatch = useDispatch();
    const [search,setString] = useState({text:"ewrre"});
    const changeHandler = (e) =>{
            setString(s=>({...s,text:e.target.value}));
    }
    useEffect(()=>{
        dispatch(fetchRobots(search.text.trim()));
    },[search])
    return (
        <div style={{height:'50vh'}}>
            robots are shown here
            {
                robots.data && <img src={robots.data} />
            }
            <input type='text' value={search.text} onChange={changeHandler}/>
        </div>
    )
}
export default RobotDemo;