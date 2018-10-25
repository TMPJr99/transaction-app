import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store'
import { fetchReservation } from './redux/actions';


let newStore = store();

newStore.dispatch(fetchReservation())


ReactDOM.render(
    <Provider store={newStore}>
        <App />
    </Provider>, 
document.getElementById('root')
);
