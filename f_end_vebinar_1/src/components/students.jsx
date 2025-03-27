import React from "react";

export const Students = ({ label, onMove }) => {
    const [items, setItems] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    const handleClickAdd = () => {
        setItems((prev) => [...prev, inputValue]);
        setInputValue("");
    };

    const moveClick = () => {
        if (onMove) {
            onMove(items);
            setItems([]);
        }
    }


    return (
        <div className="input-block">
            <p>{label}</p>
            {items.map((str) => (
                <li key={str}>{str}</li>
            ))}
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите имя..."
            />
            <button onClick={handleClickAdd}>Добавить</button>
            <div>
                <button onClick={moveClick}>Переместить</button>
            </div>
        </div>
    );
};