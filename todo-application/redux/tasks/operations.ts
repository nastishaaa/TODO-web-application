import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TaskType } from '../../types/tasks';

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