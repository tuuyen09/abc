import {createStore} from "redux";
import {accountReducer} from "./accountReducer";

const store = createStore(accountReducer);
export default store;