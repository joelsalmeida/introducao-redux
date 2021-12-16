const Redux = require('redux');

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

const store = Redux.createStore(reducer);

store.dispatch(logIn('email@email.com'));

console.log(store.getState());
