import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  {id: 1, content: "Przejść na Reacta", done: false},
  {id: 2, content: "Obejrzeć serial", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section 
        title="Dodaj nowe zadanie" 
        body={ <Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        }
      />
    </main>
  );
}

export default App;
