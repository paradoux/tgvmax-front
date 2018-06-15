//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


//App imports
import rootReducer from './reducers/index'
import App from './App';
import './index.css';

export const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
