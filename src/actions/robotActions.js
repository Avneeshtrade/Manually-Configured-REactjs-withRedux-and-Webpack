import { ROBOT_FETCH_REQUEST, ROBOT_FETCH_SUCCESS, ROBOT_FETCH_FAILURE } from "../constants/robotConstants"

const fetchRobots = (searchString) =>{
    return (dispatch,getState) =>{
        dispatch(robotFetchRequest());  
        fetch(`https://robohash.org/${searchString}?size=300x300`)
        .then(res=>res)
        .then(json=>{
                dispatch(robotFetchSuccess(json.url));
        })
        .catch(error=>{
                dispatch(robotFetchError(error));
        })
    }    
}
export default fetchRobots;

const robotFetchRequest = () => {
    return {
        type:ROBOT_FETCH_REQUEST
    };
} 


const robotFetchSuccess = (payload) => {
    return {
        type:ROBOT_FETCH_SUCCESS,
        payload
    };
} 


const robotFetchError = (error) => {
    return {
        type:ROBOT_FETCH_FAILURE,
        payload:error
    };
} 