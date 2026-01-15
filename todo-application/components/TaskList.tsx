'use client';

import { useAppDispatch } from "@/hooks";
import { getTasks } from "@/redux/tasks/operations";
import { selectIsLoading, selectVisibleTasks } from "@/redux/tasks/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import Link from "next/link"; 
import FilterBar from "./FilterBar";
import { resetFilters } from "@/redux/tasks/slice";
import CustomLoaderForAasyncOp from "./CustomLoaderForAasyncOp";

export default function TaskList() {
    const tasks = useSelector(selectVisibleTasks);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasks());
        
        return () => {
            dispatch(resetFilters());
        };
    }, [dispatch]); 

    return (
        <>
            <FilterBar/>
            {!isLoading ? (
                <ul className="space-y-4"> 
                    {Array.isArray(tasks) && tasks?.map(task =>
                        (
                            <li key={task.id}>
                                <Link href={`/tasks/${task.id}`}>
                                    <TaskItem
                                        title={task.title}
                                        description={task.description}
                                        done={task.done}
                                        priority={task.priority}
                                    />
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <CustomLoaderForAasyncOp/>
            )}
        </>
    );
}