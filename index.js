const Redux = require('redux');

const reducer = (state = { login: false, email: '' }) => {
  return state;
};

const store = Redux.createStore(reducer);
