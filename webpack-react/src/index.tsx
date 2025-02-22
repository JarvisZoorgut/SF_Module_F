import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReduxApp from "../App-redux";

import rootReducer from './redux/reducers'


const store = createStore(rootReducer);

// Рендер приложения
const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);
