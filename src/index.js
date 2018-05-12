import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
// router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>),
    document.getElementById('root'))
registerServiceWorker();
