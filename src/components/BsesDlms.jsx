import React, { useEffect, useState } from 'react';
import dlmsfile from 'D:\\BSES\\00 Export data\\08_Dec_2021_11_23_30_DLMS\\19507249\\19507249_20211004_20211202.csv';
const DLMSReport = () => {
    const [state, setState] = useState({ header: [], body: [] })
    // console.log("file",dlmsfile);
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
        <div>
            <h1>Dlms Report Here</h1>
            <table border={2} cellSpacing={0}>
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
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}
export default DLMSReport;