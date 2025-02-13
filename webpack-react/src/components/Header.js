import React, { useState } from "react";

import "../styles/Header.css";


function Header(props) {
    // let buttonName = "КНОПКА" - убрали в props App
    let [count, setNewCount] = useState(0);
    const handleClick = ()=> {
        setNewCount(count + 1);
    };

    return (
        <header>This is header
                <button className={ "some-button" } onClick={ handleClick }>
                    {props.buttonName} - нажата: {count} раз
                </button>
        </header>
    )
}

export default Header;