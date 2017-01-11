import * as ActionTypes from '../actionCreators/ActionTypes';

const initialState = [];

export default function example(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ACTION_EXAMPLE:
      return action.payload;
    default:
      return state;
  }
}