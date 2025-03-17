import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import USer from "./User";
import UserSort from "./UserSort"; // Добавим еще один маршрут
import NotFound from "./NotFound"; // Страница 404

import ReduxApp from "./App-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import User from "./User";

function App() {
    const buttonName = "КНОПКА NEW"; // Пример выноса переменной за пределы компонента, в компоненте Header цепляем через props

    return (
        <>
            <Header buttonName={buttonName} />
            <button className="some-button" onClick={() => document.location = '/'}>Вернуться на главную</button>
            <button className="some-button" onClick={() => document.location = '/user'}>User by number</button>
            <button className="some-button" onClick={() => document.location = '/userSort'}>User sorting</button>
            <button className="some-button" onClick={() => document.location = '/redux'}>ReduxApp</button>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/userSort" element={<UserSort />} />
                <Route path="/redux" element={<ReduxApp />} />
                <Route path="*" element={<NotFound />} /> {/* 404 если маршрут не найден */}
            </Routes>
        </>
    );
}

export default App;
