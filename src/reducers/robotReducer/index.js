const { ROBOT_FETCH_REQUEST, ROBOT_FETCH_SUCCESS, ROBOT_FETCH_FAILURE } = require("../../constants/robotConstants")

const robotInitials = {
    loading:false,
    data:[],
    error:''
}

const RobotReducer = (state=robotInitials,action = {type:'',payload:''}) =>{
    switch(action.type){
        case ROBOT_FETCH_REQUEST:
        return {
            ...state,
            loading:true
        };
        case ROBOT_FETCH_SUCCESS:
        return {
            ...state,
            loading:false,
            data:action.payload
        };
        case ROBOT_FETCH_FAILURE:

        return {
            ...state,
            loading:false,
            error:action.payload
        };
        default : return {...state};
    }
}
export default RobotReducer;