import { legacy_createStore as createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

store.subscribe(() => {
  console.log("store", store.getState());
});

export const persistor = persistStore(store);
