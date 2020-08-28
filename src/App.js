import React from 'react';

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

      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <div className="section__body">
          <form className="form">
            <input
              className="form__input"
              placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
          </form>
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Lista zadań</h2>
          <div className="buttons"></div>
        </header>
        <div className="section__body">
          <ul className="tasks"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
