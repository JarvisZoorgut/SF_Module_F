import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, но запрашиваемая страница не существует.</p>
            <Link to="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
                Вернуться на главную
            </Link>
        </div>
    );
}

export default NotFound;
