import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TaskType } from '../../types/tasks';
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from './operations';

export interface initialTaskData {
    tasks: TaskType[];
    currentTask: TaskType | null;
    filters: {
        status: 'all' | 'done' | 'active',
    },
    searchQuery: string;
    sortedOrder: 'asc' | 'desc';
    isLoading: boolean;
    isError: boolean;
};

const initialState: initialTaskData = {
    tasks: [],
    currentTask: null,
    filters: {
        status: 'all',
    },
    searchQuery: '',
    sortedOrder: 'asc',
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
        setSearchQuery: (state, action) => { state.searchQuery = action.payload; },
        setSortOrder: (state, action) => { state.sortedOrder = action.payload; },
        resetFilters: (state) => {
            state.searchQuery = '';
            state.filters.status = 'all';
            state.sortedOrder = 'asc';
        }
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
            .addCase(getTaskById.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getTaskById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.currentTask = action.payload;
            })
            .addCase(getTaskById.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(createTask.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.tasks.push(action.payload);
            })
            .addCase(createTask.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(updateTask.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.currentTask = action.payload;
                const index = state.tasks.findIndex(t => t.id === action.payload.id);

                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(updateTask.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteTask.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.tasks?.filter(t => t.id !== action.payload)
            })
            .addCase(deleteTask.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
});

export const { setStatusFilter, setSearchQuery, setSortOrder, resetFilters } = tasksSlice.actions;

export default tasksSlice.reducer;
