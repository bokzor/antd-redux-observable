import { combineEpics } from 'redux-observable';

import { fetchMetadata } from './metadataEpic';
import { fetchEntities } from './entitiesEpic';

export default combineEpics(
  fetchMetadata,
  fetchEntities
);
