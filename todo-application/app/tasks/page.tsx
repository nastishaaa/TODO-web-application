import TaskList from '@/components/TaskList'; 
import Link from 'next/link';

export default function TasksPage() {
    return ( 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6">
            <div className="container mx-auto max-w-2xl">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-indigo-700/50">
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                        My Tasks
                    </h1>
                    <Link href="/create-todo" className="
                        px-5 py-2 rounded-lg 
                        bg-gradient-to-r from-violet-600 to-indigo-600 
                        hover:from-violet-700 hover:to-indigo-700
                        text-white font-semibold text-sm shadow-lg
                        transition-all duration-300 transform hover:scale-105
                    ">
                        Add New Task
                    </Link>
                </div>
                <TaskList />
            </div>
        </div>
    );
}