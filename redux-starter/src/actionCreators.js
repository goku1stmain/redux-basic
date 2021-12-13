import * as actions from "./actionTypes";

// export function bugAdded(){
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//           description: "bug1",
//         },
//       }
// }

export const bugAdded = desc({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug1",
  },
});

export const bugResolved=id({
    type:actions.bugResolved,
    payload:{
        id 
    }
})
