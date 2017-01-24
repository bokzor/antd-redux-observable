import { Observable } from 'rxjs/Observable';
import * as ActionTypes from '../constants/ActionTypes';
import { exampleAction } from '../actionCreators';
import { efEndoint } from '../constants/API';

export function example(action$) {
  return action$.ofType(ActionTypes.ACTION_EXAMPLE)
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of(exampleAction()),
      Observable.timer(2000)
        .map(() => true)
    ));
}


export function fetchMetada(action$) {
  return action$.ofType(ActionTypes.FETCH_METADATA)
    .switchMap((action) =>
    Observable.ajax({url: host + '/' + action$.payload.entitySet + '/metadata', responseType: 'json'})
      .map((result) => {
      return {
        type: 'METADATA_FETCHED',
        payload: {
          metadata,
          entitySet: action$.payload.entitySet
        }
      };
    })
  )
}
