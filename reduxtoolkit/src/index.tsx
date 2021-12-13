import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './app/store';

ReactDOM.render(
  
  <React.StrictMode>

    <Provider store={store}>
    {/* what is happening is we are wrapping the app component with provider component */}
    {/* so any data inside the store  should be available to all the component right now  */}
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
