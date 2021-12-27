import { combineReducers } from "redux";

import todoReducer from './Todo/reducer';

const rootReducer = combineReducers({
    todoReducer : todoReducer
});

    export default rootReducer;