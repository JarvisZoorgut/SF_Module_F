import React from "react";
import { useLocation, useParams } from "react-router-dom";

function UserSort() {
    const location = useLocation();
    const search = location.search;
    const query =new URLSearchParams(search);

    return (
        <h2>
            {location.search}
            <br></br>
           User with sorting: {query.get('sorting')}
        </h2>
    );
}

export default UserSort;