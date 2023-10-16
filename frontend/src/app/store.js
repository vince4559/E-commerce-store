import { configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import { apiSlice } from "./api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }

  const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
  const authPersistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authReducer,  //authReducer
        cart:cartPersistedReducer //cartReducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(apiSlice.middleware),
    devTools:true // false for production
});

export let persistor = persistStore(store);
