import { COUNTRIES_FETCH_REQUEST, COUNTRIES_FETCH_SUCCESS, COUNTRIES_FETCH_FAILURE } from "../constants/countriesConstants"

const fetchCountries = () =>{
    return (dispatch) =>{
        dispatch(countriesFetchRequest());  
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(json=>{
                dispatch(countriesFetchSuccess(json));
        })
        .catch(error=>{
                dispatch(countriesFetchError(error));
        })
    }    
}
export default fetchCountries;

export const countriesFetchRequest = () => {
    return {
        type:COUNTRIES_FETCH_REQUEST
    };
} 


export const countriesFetchSuccess = (payload) => {
    return {
        type:COUNTRIES_FETCH_SUCCESS,
        payload
    };
} 


export const countriesFetchError = (error) => {
    return {
        type:COUNTRIES_FETCH_FAILURE,
        payload:error
    };
} 