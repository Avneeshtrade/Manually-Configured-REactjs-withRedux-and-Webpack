import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("./rootReducers");


const logger = createLogger();

const store = createStore(rootReducer,applyMiddleware(ThunkMiddleware,logger));

export default store;