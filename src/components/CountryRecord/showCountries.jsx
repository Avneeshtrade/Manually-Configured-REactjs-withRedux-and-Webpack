import React,{ useEffect,useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchCountries,{countriesFetchSuccess} from '../../actions/countryActions';
import './countrStyle.css';

const ShowCountries = (props) => {
    const countries = useSelector(s => s.CountryReducer);
    const [localCountry,setLocalConutry] = useState([])
    const [element, setElement] = useState({ selectvalue:'all',regions:[],headers: ['sno', 'region', 'name', 'capital', 'borders', 'flags', 'languages', 'timezones'] })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
    }, [])

    useEffect(() => {
        if(countries.data && !(localCountry.length > 2)){
            setLocalConutry(s=>[...countries.data])
        }
    },[countries.data]);

    useEffect(()=>{
        if(localCountry){
            let region = localCountry.map(p=>p["region"])
            setElement(s=>({
                ...s,
                regions:[...new Set(region)]
            }))
        }
    },[localCountry])
    const selectChangehandler = (e) =>{
            setElement(s=>({
                ...s,
                selectvalue:e.target.value
            }))
    }
    useEffect(()=>{
        if(localCountry && localCountry.length){
            let country ;
            if(element.selectvalue === "all"){
                country = localCountry
            }
            else{
                country = localCountry.filter(e=>e["region"] === element.selectvalue)
            }
            dispatch(countriesFetchSuccess(country))
        }
    },[element.selectvalue])
    return (
        <div style={{
            overflow: 'scroll',
            height: '80vh',
            width: '80vw'
        }}>
            <h1>The Countries will be displayed below</h1>
            <hr />
            {
                countries && countries.data.length > 0 &&
                <table border={1} cellSpacing={0} >
                    <thead>
                        <tr>
                            {
                                element.headers.map((h, i) => {

                                    return <th key={i}>{ h==="region"?<select value={element.selectvalue} onChange={selectChangehandler}>
                                        {
                                            [...element.regions,'all'].map((dw,z)=>{

                                                return (
                                                    <option key={z}>{dw}</option>
                                                )
                                            })
                                        }

                                    </select>:h}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            countries.data.map((e, i) => {
                                return <tr key={i}>
                                    {
                                        element.headers.map((f, j) => {
                                            return <td key={j}>{
                                                f == "sno" ? i + 1 :
                                                    typeof (e[f]) === "object" ?
                                                        Array.isArray(e[f]) ?
                                                            e[f].join(",")
                                                            :
                                                            f === "flags" ? <img style={{ width: '50px', height: '50px' }} src={Object.values(e[f])[0]} alt={f} /> :
                                                                Object.values(e[f]).join(",")
                                                        :
                                                        e[f]
                                            }</td>
                                        })
                                    }

                                </tr>
                            })

                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default ShowCountries;