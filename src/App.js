import { useState } from "react";
import "./App.css";
import { data } from "./data/people";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <h2>{people.length} birthdays today</h2>
      {people.map((person) => {
        return (
          <section key={person.id}>
            <article>
              <img src={person.profile} alt="profile" />
              <div className="content">
                <h3>{person.name}</h3>
                <p>age: {person.age}</p>
              </div>
            </article>
          </section>
        );
      })}
      <div className="btn" onClick={() => setPeople([])}>
        clear all
      </div>
    </main>
  );
}

export default App;
