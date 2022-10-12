import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  // we'll leave this blank for now
  // which is the same as `return undefined;
  switch(action.type) {
    case 'INCREMENT':
      return {
        const: state.count + 1
      };
    case 'DECREMENT':
      return {
        const: state.count - 1
      };
    // case 'RESET':
    //   return{
    //     count: 0,
    //   };
    default: 
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
