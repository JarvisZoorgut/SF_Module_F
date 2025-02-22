import { combineReducers } from "redux";
import changeFramework from "./frameworks";
import changeLibrary from "./libraries";

const rootReducer = combineReducers({
    changeFramework, // Это массив
    changeLibrary, // Это массив
});

export default rootReducer;
