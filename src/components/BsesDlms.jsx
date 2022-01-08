import React, { useEffect, useState } from 'react';
const dlmsfile = require("./asset/19505148_20210331_20210514.csv");
//D:/BSES/00 Export data/08_Dec_2021_11_23_30_DLMS/19507249/19507249_20211004_20211202.csv

const DLMSReport = () => {
    const [state, setState] = useState({ header: [], body: [] })

    const [css,setCss] = useState({color:'blue',innerHeight:'100px'})

    useEffect(() => {
        let header, body;
        [header, ...body] = dlmsfile;
        setState(s => ({
            ...s,
            header,
            body
        }))
        return () => {

        }
    }, dlmsfile)
    return (
        <div style={css}>
            <h1>Dlms Report Here</h1>
            <table >
                <thead>
                    <tr>
                        {
                            state.header && state.header.length > 0 &&
                            state.header.map((e, i) => {
                                return (
                                    <th key={i}>{e}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    state.body && state.body.length > 0 && 
                    state.body.map((e,i)=>{
                        return (<tr key={i}>
                        {
                            e && e.length > 0 && e.map((l,j)=>{
                                return (
                                    <td key={j}>
                                        {l}
                                    </td>
                                )
                            })
                        }
                        </tr>)
                    })
                            
                }
                    
                </tbody>
            </table>
        </div>
    )
}
export default DLMSReport;