import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import {store as configureStore} from './store';
import {history} from './store/history';

ReactDOM.render(
    <React.StrictMode>
    <Provider store={configureStore({})}>
      
            <App />
     
    </Provider>
    </React.StrictMode>,
    document.getElementById('app')
)
