import React from 'react';
import Form from "./Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from './Search';

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={ <Form />}
      />
      <Section 
        title="Wyszukiwarka" 
        body={ <Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons />
        }
        body={
          <TaskList />
        }
      />
    </Container>
  );
};

export default TasksPage;
