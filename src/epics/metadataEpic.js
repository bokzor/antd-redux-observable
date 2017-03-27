require('rxjs');
import * as ActionTypes from '../constants/ActionTypes';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { pathJoin, http } from '../utils/http';
import {efEndpoint} from '../constants/API';


export function fetchMetadata(action$) {
  return action$.ofType(ActionTypes.FETCH_METADATA)
    .map(action => action.payload.entitySet)
    .mergeMap(entitySet =>
      http.getJSON(pathJoin(efEndpoint, entitySet, '/metadata'))
        .map((result) => {
          return {
            type: ActionTypes.METADATA_FETCHED,
            payload: {
              metadata: result,
              entitySet: entitySet
            }
          };
        })
    )

}
