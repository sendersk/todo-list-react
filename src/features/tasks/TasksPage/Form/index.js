import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const InputRef = useRef(null);

  const dispatch = useDispatch();
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent){
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

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