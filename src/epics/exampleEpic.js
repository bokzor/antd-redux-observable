import { Observable } from 'rxjs/Observable';
import * as ActionTypes from '../actionCreators/ActionTypes';
import { exampleAction } from '../actionCreators';

export function example(action$) {
  return action$.ofType(ActionTypes.ACTION_EXAMPLE)
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of(exampleAction()),
      Observable.timer(2000)
        .map(() => true)
    ));
}
