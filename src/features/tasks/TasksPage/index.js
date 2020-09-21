import React from 'react';
import Form from "./Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from './Search';
import FetchExampleTasksButton from "../TasksPage/FetchExampleTasksButton/index";

function TasksPage() {
  return (
    <Container>
      <Header title="Tasks List" />
      <Section 
        title="Add new task" 
        extraHeaderContent={ <FetchExampleTasksButton /> }
        body={ <Form />}
      />
      <Section 
        title="Search for task" 
        body={ <Search />}
      />
      <Section
        title="Task list"
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
