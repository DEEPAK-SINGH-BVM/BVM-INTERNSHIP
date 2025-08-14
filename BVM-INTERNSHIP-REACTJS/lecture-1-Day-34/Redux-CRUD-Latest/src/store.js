// import reducers from "./reducers";
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



// import reducers from "./reducers";
// // import { configureStore } from "@reduxjs/toolkit";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // import rootReducer from "./reducers/crudReducers";
// // import {combineReducers } from 'redux'

// // // const store = configureStore({
// // //   reducer: {
// // //     counter: reducers,
// // //   },
// // // });
// // const persistConfig = {
// //   key: "root",
// //   storage,
// // };

// // const reducerCombine = combineReducers ({
// //   other:reducers
// // })

// // export default persistReducer(persistConfig, reducerCombine);
// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export default store;
// // export default () => {
// //   let store = configureStore(persistedReducer);
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };
// // export const store = configureStore(persistedReducer);
// // export const persistor = persistStore(store)

// import { combineReducers } from "redux";
// import reducers from "./reducers";

// const rootReducer = combineReducers({
//   user: reducers,
// });

// export default rootReducer;

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
