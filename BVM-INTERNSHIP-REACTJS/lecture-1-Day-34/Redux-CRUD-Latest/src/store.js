import reducers from "./reducers";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers/crudReducers";

// // const store = configureStore({
// //   reducer: {
// //     counter: reducers,
// //   },
// // });
// const persistConfig = {
//   key : "root",
//   storage
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)

// // export default store;
// export default ()=>{
//   let store = configureStore(persistedReducer);
//   let persistor = persistStore(store)
//   return { store , persistor}
// }

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/crudReducers";
// debugger
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);
console.log(store);
