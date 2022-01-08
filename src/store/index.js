// import { routerMiddleware } from "connected-react-router";
import { compose } from "redux";
import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("./rootReducers");
import {history} from "./history";

const logger = createLogger();

export const store = (preLoadedState) => createStore(
    rootReducer(history),
    preLoadedState,
   compose(applyMiddleware(
        ThunkMiddleware,
        logger
   )
   )
    );

