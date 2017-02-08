import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


import Layout from './pages/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import store from './store';

// const reducer = (state={}, action) => {
// 	if (action.type === "CHANGE_NAME") {
// 		console.log(action.payload);
// 		console.log(state);

// 	return state-action.payload;
// 	}
// 	return state;
// }

// const reducers = combineReducers({
// 	user: reducer,
// });
// console.log(reducers);

// const sstore = createStore(reducers, 0);

// sstore.subscribe(() =>{
// 	console.log('store changed', sstore.getState());
// });
// sstore.dispatch({type:"CHANGE_NAME", payload:10});

const app = document.getElementById('app');
ReactDOM.render( 
	<Provider store={ store }>
  <Router history = { hashHistory } >
    <Route path = "/" component ={ Layout }>
      <IndexRoute component={Home} /> 
      <Route path = "SignIn" component = { SignIn } />
      <Route path = "SignUp" component = { SignUp } />
    </Route> 
  </Router> 
  </Provider>
  , app);
	