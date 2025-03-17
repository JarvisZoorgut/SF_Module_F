import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types"

import "../styles/Member.css";

function Member(props) {

    // три и более типа данных это BadPractice, обычно достаточно двух, можно написать "any"
    // let a : number | string | Function = 3
    let a : any = 3
    a = 5;
    a = "2";
    a = function() {};

    let b : Array<string>= ['asdf', 'dfgh', 'werqwer'];

    let flag : "male" | "famale" = "male";
    // flag = "man";

    // кастомные типы, далее прописываются как (member : MemberType)
    type MemberType = {
        name: string;
        age: number;
        secretIdentity: string;
    }


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

// это тип данных в свойстве props, для валидации данных (перестало работать в TypeScript)
// Member.propTypes = {
//     member: PropTypes.object,
// }

export default Member;