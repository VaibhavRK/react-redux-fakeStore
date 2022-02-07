import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    allproduct:productReducer
});

export default rootReducer;