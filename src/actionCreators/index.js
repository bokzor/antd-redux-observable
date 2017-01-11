import * as ActionTypes from './ActionTypes';

export const exampleAction = (query)  => {
  return {
    type: ActionTypes.ACTION_EXAMPLE,
    payload: {
      query,
    },
  };
};

