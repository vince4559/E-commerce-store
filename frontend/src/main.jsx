import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { persistor, store } from './app/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading...'} persistor={persistor}>
        <BrowserRouter>
          <Routes>
          <Route path='/*' element={<App />}  />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    
  </React.StrictMode>,
)
