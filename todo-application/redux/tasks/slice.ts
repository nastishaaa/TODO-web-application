import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TaskType } from '../../types/tasks';
import { getTasks } from './operations';

export interface initialTaskData {
    tasks: TaskType[];
    currentTask: TaskType | null;
    filters: {
        status: 'all' | 'done' | 'active',
    },
    isLoading: boolean;
    isError: boolean;
};

const initialState: initialTaskData = {
    tasks: [],
    currentTask: null,
    filters: {
        status: 'all',
    },
    isLoading: false,
    isError: false,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setStatusFilter: (state, action: PayloadAction<'all' | 'done' | 'active'>) => {
            state.filters.status = action.payload; 
    },
    },
    extraReducers: builder => {
        builder
            .addCase(getTasks.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
});

export const { setStatusFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
