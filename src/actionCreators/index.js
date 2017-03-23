// @flow
import * as ActionTypes from '../constants/ActionTypes';

export const exampleAction = (query : String)  => {
  return {
    type: ActionTypes.ACTION_EXAMPLE,
    payload: {
      query,
    },
  };
};

export const fetchMetadata = (entitySet : String) => {
  return {
    type: ActionTypes.FETCH_METADATA,
    payload: {
      entitySet: entitySet
    }
  }
};

export const fetchEntities = (entitySet: String, filter, offset) => {
  return {
    type: ActionTypes.FETCH_ENTITIES,
    payload: {
      entitySet: entitySet,
      filter: filter,
      offset: offset,
    }
  }
};
