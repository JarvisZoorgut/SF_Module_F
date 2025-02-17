import React, { useState } from "react";
import PropTypes from "prop-types"

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

// это тип данных в свойстве props, для валидации данных (перестало работать в TypeScript)
// Header.propTypes = {
//     count: PropTypes.number,
// }

export default Header;