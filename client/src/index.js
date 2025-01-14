import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import DataProvider from './Context/DataProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from "react-redux";
import { store } from "../src/User/app/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();