import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import {
  selectTasksByQuery,
  removeTask,
  toggleTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

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
            <StyledLink to={`/tasks/${id}`}>{content}</StyledLink>
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
