import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, deleteTask, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        (
            <List>
                {tasks.map(({ id, content, done}) => (
                    <Item 
                        key={id}
                        hidden={done && hideDone}
                    >
                        <Button
                            toggleDone
                            onClick={() => dispatch(toggleTaskDone(id))} 
                        >
                            {done ? "✔" : ""}
                        </Button>
                        <Content done={done}>
                            {content}
                        </Content>
                        <Button 
                            remove
                            onClick={() => dispatch(deleteTask(id))} 
                        >
                          X
                        </Button>
                    </Item>
                ))}
            </List>
        )
    )
};

export default TaskList;