const { COUNTRIES_FETCH_REQUEST, COUNTRIES_FETCH_SUCCESS, COUNTRIES_FETCH_FAILURE } = require("../../constants/countriesConstants")

const countryInitials = {
    loading:false,
    data:[],
    error:''
}

const CountryReducer = (state=countryInitials,action) =>{
    switch(action.type){
        case COUNTRIES_FETCH_REQUEST:
        return {
            ...state,
            loading:true,
            data:[],
            error:''
        };
        case COUNTRIES_FETCH_SUCCESS:
        return {
            ...state,
            loading:false,
            data:action.payload,
            error:''
        };
        case COUNTRIES_FETCH_FAILURE:
        return {
            ...state,
            loading:false,
            error:action.payload
        };
        default : return {...state};
    }
}
export default CountryReducer