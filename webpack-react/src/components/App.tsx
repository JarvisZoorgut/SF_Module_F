import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Route_1 from "./Route1";
import Route_2 from "./Route_2"; // Добавим еще один маршрут
import NotFound from "./NotFound"; // Страница 404

import "bootstrap/dist/css/bootstrap.min.css";
import Route1 from "./Route1";

function App() {
    const buttonName = "КНОПКА NEW"; // Пример выноса переменной за пределы компонента, в компоненте Header цепляем через props

    return (
        <>
            <Header buttonName={buttonName} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/route1" element={<Route1 />} />
                <Route path="/route2" element={<Route_2 />} />
                <Route path="*" element={<NotFound />} /> {/* 404 если маршрут не найден */}
            </Routes>
        </>
    );
}

export default App;
