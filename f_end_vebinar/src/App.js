import React from "react";

import { Students } from "./components/students";
import "./styles.css";

export default function App() {
  const [mainList, setMainList] = React.useState([]);

  const onMoveStudents = (arr) => {
    setMainList([...mainList, ...arr])
  }

  return (
    <div className="App">
      <Students label="Поток 1" onMove={onMoveStudents} />
      <Students label="Поток 2" onMove={onMoveStudents} />
      <Students label="Поток 3" onMove={onMoveStudents} />
      <br />
      <hr />
      <h2>Все студенты:</h2>
      <ul>
        {mainList.map((name) => (
        <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

