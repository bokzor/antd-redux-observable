import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

export default function entitiesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ENTITIES:
      return {...state, isLoading: true };
    case ActionTypes.ENTITIES_FETCHED:
      return { ...state, isLoading: false, entities: action.payload.entities, totalItem: action.payload.totalItem};
    default:
      return state;
  }

}
  
