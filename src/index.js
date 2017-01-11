import React from 'react'
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './epics/configureStore'

render(
  <Root store={configureStore()}/>,
  document.getElementById('app')
);

