import { combineReducers } from "redux";
import  MenuLeftReducer from "./MenuLeftReducer";


const allReducers = combineReducers({
   menu: MenuLeftReducer
});

export default allReducers;