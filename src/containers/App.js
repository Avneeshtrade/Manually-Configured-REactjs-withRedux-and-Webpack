import React from 'react';
import DLMSReport from '../components/BsesDlms';
import RobotDemo from '../components/RobotDemo';
import './App.css';
const App = (prop) =>{
    return (
        <div className='header'>
            {/* <DLMSReport /> */}
            <RobotDemo />
        </div>
    )
}
export default App;