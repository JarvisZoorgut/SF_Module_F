import React, { Fragment } from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const buttonName = "КНОПКА NEW"; //примеh выноса переменной за пределы компонента, в компоненте Header цепляем через props

    return (
        <Fragment>
            <Header buttonName = {buttonName} />
            <Main />
        </Fragment>
    );
}

export default App;