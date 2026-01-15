import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CreateTaskType, TaskType, UpdateTaskType } from '../../types/tasks';

export const getTasks = createAsyncThunk<
    TaskType[],
    void,
    { rejectValue: string }
>(
    'tasks/getAllTasks',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/tasks`);

            return res.data.tasks as TaskType[];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(
                    error.response?.data?.message || error.message
                );
            }
            return thunkAPI.rejectWithValue("An unexpected error occurred");
        }
    }
);

export const getTaskById = createAsyncThunk<
    TaskType,
    number,
    { rejectValue: string }>(
        'tasks/getTaskById',
        async (id, thunkAPI) => {
            try {
                const res = await axios.get(`http://localhost:3000/api/tasks/${id}`);
                return res.data.task as TaskType;
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    return thunkAPI.rejectWithValue(
                        error.response?.data?.message || error.message
                    );
                }
                return thunkAPI.rejectWithValue("An unexpected error occurred");
            }
        }
);
    
export const createTask = createAsyncThunk<
    TaskType,
    CreateTaskType,
    { rejectValue: string }
>(
    'tasks/createTask',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`http://localhost:3000/api/tasks`, payload);
            return res.data.task as TaskType;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(
                    error.response?.data?.message || error.message
                );
            }
            return thunkAPI.rejectWithValue("An unexpected error occurred");
        }
    }
);

export const updateTask = createAsyncThunk<
    TaskType,
    { id: number; data: Partial<CreateTaskType> }, 
    { rejectValue: string }
>(
    'tasks/updateTask',
    async ({ id, data }, thunkAPI) => {
        try {
            const res = await axios.patch(`http://localhost:3000/api/tasks/${id}`, data);
            return res.data.updatedTask as TaskType;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data?.message || "Error updating task");
            }
            return thunkAPI.rejectWithValue("Unexpected error");
        }
    }
);

export const deleteTask = createAsyncThunk<
    number,
    number,
    { rejectValue: string }
>(
    'tasks/deleteTask',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:3000/api/tasks/${id}`);
            return id;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data?.message || "Error deleting task");
            }
            return thunkAPI.rejectWithValue("Unexpected error");
        }
    }
);