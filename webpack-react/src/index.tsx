import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

import { createStore } from "redux";


const root = createRoot(document.getElementById("root")!);
root.render(<App />);


const store = createStore(changeStore);

function changeStore(state = [], action) {
        console.log('STORE', state)
        switch (action.type) {
        case 'WRITE':
            return [
                ...state,
                action.payload,
            ]
        break;
        default:
                return state
    }
    
    return state
}


const testButton = document.querySelector(".testButton");
const items = document.querySelector(".testUl");
const inputElement = document.querySelector(".testInput") as HTMLInputElement;

testButton?.addEventListener("click", () => {
    if (inputElement) {
        const inputValue = inputElement.value;
        store.dispatch({ type: "WRITE", payload: inputValue });
        // console.log("INPUT", inputValue);
    }
});


store.subscribe(() => {
    if (!items) {
        console.error("Элемент .testUl не найден в DOM!");
        return;
    }

    items.innerHTML = ''; // Очистка списка перед ререндерингом

    const state = store.getState(); // store.getState() возвращает массив

    if (!Array.isArray(state)) {
        console.error("store.getState() должен возвращать массив, но вернул:", state);
        return;
    }

    state.forEach(item => { // Теперь state — массив, и мы можем его перебрать
        const li = document.createElement('li');
        li.textContent = String(item); // Приводим item к строке
        items.appendChild(li);
    });
});