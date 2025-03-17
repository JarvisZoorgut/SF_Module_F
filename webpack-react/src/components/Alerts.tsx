import * as React from "react";
import Alert from "react-bootstrap/Alert";


function Alerts(props) {
    let children = props.children;
    return (
        <>
            { 
                React.Children.map(children, (child, index) => {
                    if(index < 2) {
                        return child;
                    }
                })
            }
            {
                React.Children.count(props.children)
            }
        </>
    );
}

export default Alerts