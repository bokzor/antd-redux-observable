import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

export default function metadataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_METADATA:
      return {...state, isLoading: true };
    case ActionTypes.METADATA_FETCHED:
      return {...state, [action.payload.entitySet]: action.payload.metadata, isLoading: false};
    default:
      return state;
  }

}
  
