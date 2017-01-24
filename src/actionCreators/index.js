// @flow
import * as ActionTypes from '../constants/ActionTypes';

export const exampleAction = (query : string)  => {
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

export const fetchEntities = () => {

};
