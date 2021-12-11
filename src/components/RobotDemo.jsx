import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchRobots from '../actions/robotActions';

const RobotDemo = () => {
    const robots = useSelector(state => state.RobotReducer);
    const dispatch = useDispatch();
    const [search,setString] = useState({text:"ewrre"});
    const changeHandler = (e) =>{
            setString(s=>({...s,text:e.target.value}));
    }
    useEffect(()=>{
        dispatch(fetchRobots(search.text.trim()));
    },[search])
    return (
        <div>
            robots are shown here
            {
                robots.data && <img src={robots.data} />
            }
            <input type='text' value={search.text} onChange={changeHandler}/>
        </div>
    )
}
export default RobotDemo;