import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const params = useParams<{ id: string }>();
    const userId = Number(params.id); // Преобразуем строку в число

    return (
        <h2>
            Selected User ID: {userId}
        </h2>
    );
}

export default User;