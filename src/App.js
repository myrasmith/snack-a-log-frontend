import { useState, useEffect } from "react";
import "./App.css";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    fetch(`${API}/snacks`)
      .then((res) => res.json())
      .then((data) => {
        setSnacks(data.result);
      });
  });

  return (
    <div className="App">
      <h1>Snack-a-Log</h1>
      <h2>All Snacks</h2>
      <ul>
        {snacks.map((snack) => {
          return <li key={snack.id}>{snack.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
