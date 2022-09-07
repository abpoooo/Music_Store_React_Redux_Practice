import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";



// const root = ReactDOM.createRoot(document.getElementById('root'));
// const reduxStore = createStore(reducers, applyMiddleware(thunk))
// root.render(
//     <Provider store={createStore(reduxStore)}>
//         <App/>
//     </Provider>
// );
const reduxStore = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
