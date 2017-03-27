require('rxjs');
import * as ActionTypes from '../constants/ActionTypes';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {pathJoin, http, encodeParams} from '../utils/http';
import {efEndpoint} from '../constants/API';


export function fetchEntities(action$) {
  return action$.ofType(ActionTypes.FETCH_ENTITIES)
    .map(action => action.payload)
    .switchMap(payload => {

        const params = {
          filter: encodeURIComponent(JSON.stringify(payload.filter)),
          order: payload.order,
          offset: (payload.page - 1) * payload.limit,
          limit: payload.limit,
        };

        return http.getJSON(pathJoin(efEndpoint, payload.entitySet, '?' + encodeParams(params)))
          .map((result) => {
            return {
              type: ActionTypes.ENTITIES_FETCHED,
              payload: {
                entities: result.entities,
                totalItem: result.nbTotalItem,
                entitySet: payload.entitySet
              }
            };
          })
      }
    );
}

