import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        deleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllTasksDone: state => {
            state.tasks = state.tasks.map(task => ({ ...task, done: true }));
        }
    },
});

export const { addTask, deleteTask, toggleHideDone, toggleTaskDone, setAllTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;