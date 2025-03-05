import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxApp from "../App-redux";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import rootReducer from './redux/reducers'
import { logging } from './redux/middleware/logging'



const composeEnhancers = 
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logging))
);


// Рендер приложения
const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
