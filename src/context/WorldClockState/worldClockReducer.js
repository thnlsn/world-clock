// Function to decide what happens to state based on an action.

import { GET_TIME } from '../types';

// GithubState dispaches actions here, ad depending on the TYPE it does something, maybe with a payload...
export default (state, action) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
