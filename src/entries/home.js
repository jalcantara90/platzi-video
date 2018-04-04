import React from 'react'
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../api.json';
import userData from '../api-user.json';
const homeContainer = document.getElementById('home-container');
import data from '../schemas/index';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

// console.log(data);

// const initialState = {
//   data: {
//     // ...data
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//     userData: {
//       ...userData
//     }
//   },
//   modal: {
//     visibility: false,
//     mediaId: null
//   }
// }

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);

// render(<Home data={data} userData={userData}/>, homeContainer); // recibe dos parámetros, que renderizar y donde va a hacerlo.
