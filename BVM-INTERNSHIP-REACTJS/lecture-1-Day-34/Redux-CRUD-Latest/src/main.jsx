// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from "react-redux";
// import store from "./store"; 

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// );

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react.js";
import { persistor, store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* that delays rendering your app's UI until your persisted state has been retrieved and saved to redux */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

