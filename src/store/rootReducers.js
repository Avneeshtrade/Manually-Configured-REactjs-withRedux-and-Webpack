const {combineReducers } = require("redux");
import RobotReducer from "../reducers/robotReducer";
import CountryReducer from "../reducers/countriesReducer";

export const rootReducer = (history) => combineReducers({
    RobotReducer,
    CountryReducer    
});