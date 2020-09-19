import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";


export default () => (
  <Container>
    <Header title="About" />
    <Section 
        title="Description" 
        body={<>This is a simple task list created for educational purposes. The current version includes adding tasks, marking the selected ones as completed and the possibility of removing the selected task. It also contains button to show/hide completed tasks and mark all tasks as completed. Tasks will be saved in local storage memory of your browser. </>} 
    />
  </Container>
);
