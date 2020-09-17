import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import {
  selectTasksByQuery,
  removeTask,
  toggleTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          <Content done={done}>
            <Link to={`/zadania/${id}`}>{content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(id))}>
            X
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
