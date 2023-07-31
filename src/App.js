import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "John Doe", birthday: "1990-01-15" },
    { id: 2, name: "Jane Smith", birthday: "1985-05-20" },
    { id: 3, name: "Bob Johnson", birthday: "1993-09-10" },
  ]);

  return (
    <div className="App">
      <h1>Birthday Reminder App</h1>
      {people.length === 0 ? (
        <p>No birthdays to display.</p>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {person.name} - {person.birthday}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
};

export default App;
