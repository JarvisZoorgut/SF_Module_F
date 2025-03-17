import React from "react";
import Alert from "react-bootstrap/Alert"

import Members from "./Members";
import Alerts from "./Alerts";

import "../styles/Main.css";

function Main() {
    let alertText = "Это текст предупреждения из Main переданный как clildren";
    return (
        <main>
            <Alerts>
                <Alert variant={"danger"}>
                    { alertText }
                </Alert>
                <Alert variant={"warning"}>
                    { alertText }
                </Alert>
                <Alert variant={"success"}>
                    { alertText }
                </Alert>
            </Alerts>
            <Members />
        </main>
    )
}

export default Main;