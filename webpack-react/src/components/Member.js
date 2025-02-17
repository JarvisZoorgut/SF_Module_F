import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types"

import "../styles/Member.css";

function Member(props) {
    const [selected, changeSelected] = useState(false);
    console.log(selected);

    return(
        <tr className={selected ? "selected-member": ""}>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.secretIdentity}</td>
            <td>
                { selected ? 
                    <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                    <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                }
            </td>
        </tr>
    );
}

// это заглушка, если нет такого значения в свойстве prop, то передаем вместо него "---". Условие вывода в Members.js
Member.defaultProps = { 
    secretIdentity: "---"
}

// это тип данных в свойстве props, для валидации данных
Member.propTypes = {
    member: PropTypes.object,
}

export default Member;