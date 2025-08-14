
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from "react-redux";
// // import store from "./store"; 
// import { PersistGate } from 'redux-persist/lib/integration/react.js';
// import {persistor , store} from './store.js'
// // createRoot(document.getElementById("root")).render(
// //   <Provider store={store}>
// //     <App/>
// //   </Provider>
// // );
// // 
// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// );
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; 
import {persistor , store} from './store.js'
import App from "./App";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);