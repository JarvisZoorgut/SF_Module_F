import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

import "../styles/Member.css";

function Member(props) {
    const [selected, changeSelected] = useState(false);
    console.log(selected);

    return(
        <tr className={selected ? "selected-member": ""}>
            <td>{props.member.name}</td>
            <td>{props.member.age}</td>
            <td>{props.member.secretIdentity}</td>
            <td>
                <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                {/* <Button variant="danger">Remove</Button> */}
            </td>
        </tr>
    );
}

export default Member;