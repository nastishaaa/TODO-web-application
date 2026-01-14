export type TaskType = {
    id: number;
    title: string;
    description?: string;
    done: boolean;
    priority: number;
    createdAt: string;
    updatedAt: string;
}

export type CreateTaskType = {
    title: string;
    description?: string;
    done: boolean;
    priority: number;
}