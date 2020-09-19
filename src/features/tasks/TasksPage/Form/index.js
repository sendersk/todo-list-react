import React, {useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

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
        placeholder="Write your task here"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <Button>Submit</Button>
    </StyledForm>
  );
};

export default Form;