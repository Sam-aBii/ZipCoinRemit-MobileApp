import { useState } from "react";

export default function useAsyncReducer(reducer, initState) {
  const [state, setState] = useState(initState);
  const dispatchState = async (action) => setState(await reducer(state, action));
  return [state, dispatchState];
}

// async function reducer(state, action) {
//   switch (action.type) {
//     case "switch1":
//       // Do async code here
//       return "newState";
//   }
// }
