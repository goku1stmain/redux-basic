import { createStore } from "redux";
import * as actions from "./actionTypes";
import reducer from './reducer';

const store=createStore(reducer);// createStore takes function has an argument 
export default store;

