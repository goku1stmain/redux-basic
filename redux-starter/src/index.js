import store from "./store";
import * as actions from './actionTypes'
import {bugAdded} from './actionCreators';
// dispatching an action
// so action should have two thinks
// one is type
// then other one is payload

const unsubscribe = store.subscribe(() => {
  console.log("store changed" + store.getState());
});
store.dispatch(bugAdded);
unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
// dispatch is used to dispatch action
// subscribe method is used to get notified what actions changes happens
// get state method to get the current state of the store
// we can only getState in redux which is an fundamental architecture of redux
// so to change state you have to dispatch an action to reducer
