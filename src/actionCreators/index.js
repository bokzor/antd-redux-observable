import * as ActionTypes from '../constants/ActionTypes';

export const exampleAction = (query)  => {
  return {
    type: ActionTypes.ACTION_EXAMPLE,
    payload: {
      query,
    },
  };
};

export const fetchEntities = () => {

};
