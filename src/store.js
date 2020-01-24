import { applyMiddleware, createStore, compose } from "redux";

import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
// import logger from 'redux-logger'
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "item",
  storage,
  debug: true,
  whitelist: ["posts"] //  will be persisted
};

const pReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
  pReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //comment out line to show on electron
  )
);

const persistor = persistStore(store, null, () => {
  //checking restored state
  console.log("restoredState", store.getState());
});

const output = {
  store: store,
  persistor: persistor
};
// export default()=>{
//     return { persistor: persistor, store: store }
// }

export default output;
