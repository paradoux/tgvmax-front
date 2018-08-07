//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


//App imports
import rootReducer from './reducers/index'
import App from './App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
