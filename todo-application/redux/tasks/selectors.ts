import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { TaskType } from "@/types/tasks";

export const selectTasks = (state: RootState): TaskType[] => state.tasks.tasks;
export const selectCurrentTask = (state: RootState): TaskType | null => state.tasks.currentTask;
export const selectIsLoading = (state: RootState): boolean => state.tasks.isLoading;
export const selectIsError = (state: RootState): boolean => state.tasks.isError;

export const selectStatusFilter = (state: RootState) => state.tasks.filters.status;

export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter],
    (tasks, statusFilter) => {
        switch (statusFilter) {
            case 'done':
                return tasks.filter(task => task.done);
            case 'active':
                return tasks.filter(task => !task.done);
            default:
                return tasks;
        }
    }
);