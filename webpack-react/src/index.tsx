import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReduxApp from "./App-redux";

// Редуктор
const initialState: string[] = ["redux", "react"];

function changeStore(state = initialState, action: { type: string; payload?: string }) {
  switch (action.type) {
    case "WRITE":
      return [...state, action.payload || ""];
    default:
      return state;
  }
}

const store = createStore(changeStore);

// Рендер приложения
const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);
