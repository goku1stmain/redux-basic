import { lastIndexOf } from "lodash";
// import {BUG_ADDED,BUG_REMOVED} from './actionTypes'; this is one way but might get polluted when you lot of names 
import * as actions from './actionTypes'; // everything will come under actions as objects actions={}
let lastId=0;

function reducer(state=[], action){ // job of the reducer is to return new state based on action 
    if(action.type===actions.BUG_ADDED){
        return [
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
                resolved:false,
            }
        ]
    }
    else if(action.type===actions.BUG_REMOVED){
       return state.filter(bug=>bug.id!==action.payload.id)
    }
    else{
        return state;
    }

}

export default reducer;