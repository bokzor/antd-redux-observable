import { combineEpics } from 'redux-observable';

import { fetchMetada } from './metadataEpic';

export default combineEpics(
  fetchMetada
);
