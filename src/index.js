import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import reducer from "./Store/reducer";
import orderReducer from "./Store/order-reducer";
import App from './App';
const rootReducer = combineReducers({
    foods: reducer,
    order: orderReducer
});
 const store =createStore(rootReducer,applyMiddleware(thunkMiddleware));
const app = (
    <Provider store={store}>
<BrowserRouter>
    <App/>
</BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

