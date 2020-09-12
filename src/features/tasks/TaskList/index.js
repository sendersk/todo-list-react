import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import {
  selectTasks,
  removeTask,
  toggleTaskDone,
  selectHideDone,
} from "../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          <Content done={done}>{content}</Content>
          <Button remove onClick={() => dispatch(removeTask(id))}>
            X
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
