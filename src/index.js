import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/your-pet-front">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer autoClose="2000" theme="light" />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
