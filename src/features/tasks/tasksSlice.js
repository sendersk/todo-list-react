import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        removeTask: ({tasks}, { payload: taskId }) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks.splice(index, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({tasks}) => {
            for (const task of tasks) {
                task.done = true;
            }
        }
    },
});

export const { addTask, removeTask, toggleHideDone, toggleTaskDone, setAllDone } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;