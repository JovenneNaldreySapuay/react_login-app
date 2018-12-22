import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';

const myStore = createStore(
	reducers, 
	composeWithDevTools(
		applyMiddleware(reduxThunk)
	)
);

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
