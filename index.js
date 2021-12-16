import { createStore } from 'redux';
import { combineReducers } from 'redux';

import reducerTwo from './reducerTwo.js';

// actionCreator, função que retorna uma action, tem pelo menos uma propriedade type
const logIn = (email) => ({
  type: 'LOGIN',
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(logIn('email@email.com'));

console.log(store.getState());

const reducers = combineReducers({
  reducer,
  reducerTwo,
});

const storeTwo = createStore(reducers);
console.log(JSON.stringify(storeTwo.getState()));

storeTwo.subscribe(() => {
  console.log(storeTwo.getState());
})
