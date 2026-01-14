'use client';

import { useAppDispatch } from "@/hooks";
import { getTasks } from "@/redux/tasks/operations";
import { selectIsLoading, selectVisibleTasks } from "@/redux/tasks/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import Link from "next/link"; 
import FilterBar from "./FilterBar";

export default function TaskList() {
    const tasks = useSelector(selectVisibleTasks);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks());
        console.log(tasks);
    }, [dispatch]); 

    return (
        <>
            <FilterBar/>
            {!isLoading ? (
                <ul className="space-y-4"> 
                    {Array.isArray(tasks) && tasks.map(task => (
                        <li key={task.id}>
                            <Link href={`/tasks/${task.id}`}>
                                <TaskItem 
                                    id={task.id}
                                    title={task.title}
                                    description={task.description}
                                    done={task.done}
                                    priority={task.priority} 
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center p-10 text-indigo-300">
                    Loading tasks...
                </div>
            )}
        </>
    );
}