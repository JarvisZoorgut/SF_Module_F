import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import Member from "./Member";

import "../styles/Members.css"

function Members() {
    const [members, setMembers] = useState([]);
    if(!members.length) {
        axios.get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json").then(res => {
            setMembers(res.data.members);
        });
    }
    return (
        <Table striped bordered hover className="members">
            <thead><tr><th>Name</th><th>Age</th><th>SecretIdentity</th><th>Select</th></tr></thead>
            <tbody>
                {members.map(member => member.secretIdentity ? <Member key={member.name} name={member.name} 
                age={member.age} secretIdentity={member.secretIdentity}/> :
                <Member key={member.name} name={member.name} age={member.age} />)}
            </tbody>
        </Table>
    );
}

export default Members;