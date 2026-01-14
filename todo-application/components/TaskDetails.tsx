'use client';

import { useAppDispatch, useAppSelector } from "@/hooks";
import { getTaskById } from "@/redux/tasks/operations";
import { selectCurrentTask } from "@/redux/tasks/selectors";
import { useEffect } from "react";
import Link from "next/link";

type TaskDetailsProps = {
  id: string;
};

export default function TaskDetails({ id }: TaskDetailsProps) {
  const currentTask = useAppSelector(selectCurrentTask);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTaskById(Number(id)));
  }, [dispatch, id]); 

  if (!currentTask) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0F19]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans">
            <main className="mx-auto max-w-4xl px-6 py-20">
        
                <Link
                    href="/tasks"
                    className="inline-flex items-center gap-2 mb-10 text-white/40 hover:text-indigo-400 transition-colors group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Back to all tasks
                </Link>

                <section className="relative">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 blur opacity-20" />
          
                    <div className="relative rounded-3xl bg-[#111827] border border-white/10 p-8 md:p-12">
            
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                            <div>
                                <span className={`inline-block mb-4 rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase ${currentTask.done
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                    }`}>
                                    {currentTask.done ? "✓ Completed" : "In Progress"}
                                </span>
                
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                    {currentTask.title}
                                </h1>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <div className="rounded-2xl bg-white/5 p-4 border border-white/5 text-center min-w-[120px]">
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Priority</p>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                        {currentTask.priority} / 10
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-white/40 text-sm font-medium mb-4 uppercase tracking-wider">Description</h3>
                            <p className="text-white/70 text-lg leading-relaxed bg-white/5 rounded-2xl p-6 border border-white/5">
                                {currentTask.description || "No description provided for this task."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5">
                                <span className="text-2xl text-indigo-400">📅</span>
                                <div>
                                    <p className="text-white/30 text-xs uppercase">Created At</p>
                                    <p className="text-sm">{new Date(currentTask.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
              
                            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5">
                                <span className="text-2xl text-pink-400">⚙️</span>
                                <div>
                                    <p className="text-white/30 text-xs uppercase">Internal ID</p>
                                    <p className="text-sm font-mono text-white/60">#{currentTask.id}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <button className="flex-1 rounded-xl bg-indigo-500 px-7 py-4 text-sm font-bold hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/20">
                                Edit Task
                            </button>
                            <button className="flex-1 rounded-xl border border-red-500/20 bg-red-500/10 px-7 py-4 text-sm font-bold text-red-400 hover:bg-red-500/20 transition">
                                Delete Task
                            </button>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}