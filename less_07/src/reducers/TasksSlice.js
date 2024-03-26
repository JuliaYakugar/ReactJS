import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../data/tasks';

const initialState = {
    tasks: [],
    loading: false,
    error: null
};

const fetchTasksFromLocalFile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasksData);
        }, 5000);
    });
};

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const tasks = await fetchTasksFromLocalFile();
        return tasks;
    }
);

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default tasksSlice.reducer;
