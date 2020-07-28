import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Styling
import 'bulma/css/bulma.css';
import './styles.scss';

// Components
import App from './App';

// Reducers
import { carReducer } from './reducers/carReducer';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
rootElement
);
