import React from "react";

import { Students } from "./components/students";
import "./styles.css";

export default function App() {
  const [mainList, setMainList] = React.useState([]);

  return (
    <div className="App">
      <Students label="Поток 1" />
      <Students label="Поток 2" />
      <Students label="Поток 3" />

    </div>
  );
}

