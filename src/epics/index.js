import { combineEpics } from 'redux-observable';

import { example } from './exampleEpic';

export default combineEpics(
  example
);
