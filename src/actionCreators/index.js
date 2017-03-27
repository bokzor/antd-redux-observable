// @flow
import * as ActionTypes from '../constants/ActionTypes';
import FilterGroupContainer from '../models/FilterGroupContainer';

export const fetchMetadataAction = (entitySet: String) => {
  return {
    type: ActionTypes.FETCH_METADATA,
    payload: {
      entitySet: entitySet
    }
  }
};

export const fetchEntitiesAction = (entitySet: String, filter: FilterGroupContainer, page: Number, limit: number, order: String) => {
  return {
    type: ActionTypes.FETCH_ENTITIES,
    payload: {
      entitySet: entitySet,
      filter: filter,
      page: page,
      limit: limit,
      order: order,
    }
  }
};
