import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

export default function metadataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ACTION_EXAMPLE:
      return action.payload;
    default:
      return state;
  }

}
  
