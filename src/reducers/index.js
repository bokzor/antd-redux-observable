import { combineReducers } from 'redux';
import metadata from './metadata';
import entities from './entities';

export default combineReducers({
  metadata,
  entities
});
