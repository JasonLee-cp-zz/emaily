import { FETCH_SURVEYS, DELETE_SURVEY } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:

    default:
      return state;
  }
}
