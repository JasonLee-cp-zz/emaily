import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
  //TODO: return either null, user info, or false
  //null -> still waiting to find out whether the user is logged in or not
  // user info->successful
  //fasel -> not successful
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
