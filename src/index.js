import React from 'react';
import ReactDOM from 'react-dom';
import ListCedis from './components/ListCedis'
import MapComponent from './components/MapTravelComponent'
import * as serviceWorker from './serviceWorker';
import '../src/styles/menu.css';

ReactDOM.render(<MapComponent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
