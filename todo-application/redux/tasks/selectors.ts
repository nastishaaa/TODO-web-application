import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { TaskType } from "@/types/tasks";

export const selectTasks = (state: RootState): TaskType[] => state.tasks.tasks;
export const selectCurrentTask = (state: RootState): TaskType | null => state.tasks.currentTask;
export const selectIsLoading = (state: RootState): boolean => state.tasks.isLoading;
export const selectIsError = (state: RootState): boolean => state.tasks.isError;

export const selectStatusFilter = (state: RootState) => state.tasks.filters.status;
export const selectSearchQuery = (state: RootState) => state.tasks.searchQuery;
export const selectSortOrder = (state: RootState) => state.tasks.sortedOrder;

export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter, selectSearchQuery, selectSortOrder],
    (tasks, filter, query, sortOrder) => {
        if (!Array.isArray(tasks)) return [];

        return tasks
            ?.filter((task) => {
                if (!task || typeof task.title !== 'string') {
                    return false; 
                }
                const matchesFilter =
                    filter === "all" ? true : filter === "done" ? task.done : !task.done;
                const matchesSearch = task.title.toLowerCase().includes(query.toLowerCase());
                return matchesFilter && matchesSearch;
            })
            .sort((a, b) => {
                return sortOrder === "asc"
                    ? a.priority - b.priority
                    : b.priority - a.priority;
            });
    }
);