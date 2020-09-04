import React, {useState} from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent){
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  }; 

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input 
        value={newTaskContent} 
        placeholder="Co jest do zrobienia?"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;