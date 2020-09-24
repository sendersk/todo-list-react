import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink, EditableContent, ContentInput } from "./styled";
import {
  selectTasksByQuery,
  removeTask,
  editTask,
  toggleTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { toTask } from "../../../../routes";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const [editableId, setEditableId] = useState(0);
  const [newTaskName, setNewTaskName] = useState("");

  const dispatch = useDispatch();

  const onEditSave = (id, content) => {
    dispatch(
      editTask({
        content: newTaskName.trim() || content,
        id,
      })
    );

    setEditableId(undefined);
  };

  return (
    <List>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          {editableId === id ? (
            <EditableContent as="form">
              <ContentInput
                autoFocus
                value={newTaskName}
                onChange={({target}) => setNewTaskName(target.value)}      
              />
              <Button save onClick={() => onEditSave(id, content)}>
                Save
              </Button>
            </EditableContent>
          ) : (
            <EditableContent>
              <Content done={done}>
                <StyledLink to={toTask({ id: id })}>{content}</StyledLink>
              </Content>
              <Button
                edit
                onClick={() => setEditableId(id) || setNewTaskName(content)}
              >
                Edit
              </Button>
            </EditableContent>
          )}
          <Button remove onClick={() => dispatch(removeTask(id))}>
            X
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
