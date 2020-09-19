import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectAreTasksEmpty, toggleHideDone, setAllDone, selectIsEveryTaskDone, selectHideDone, fetchExampleTasks } from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>    
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Download example tasks
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} done
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Set all as done
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;