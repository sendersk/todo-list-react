import React, {useState, useRef} from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const InputRef = useRef(null);
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent){
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    InputRef.current.focus();
  }; 

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input 
        ref={InputRef}
        value={newTaskContent} 
        placeholder="Co jest do zrobienia?"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;