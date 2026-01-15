'use client';

import CreateTodoForm from "@/components/CreateTodoForm";
import { useRouter } from "next/navigation";

export default function CreateTaskPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white relative overflow-hidden">
            
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px]" />

            <div className="relative z-10 px-6 py-12 md:py-20">
                <div className="mx-auto max-w-4xl">
                
                    <button 
                        onClick={() => router.push('/')}
                        className="group mb-8 flex items-center gap-2 text-white/40 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to dashboard</span>
                    </button>

                    <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-start">
                        
                        <div className="space-y-6 pt-8">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Plan your <br />
                                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                    next big move.
                                </span>
                            </h1>
                            <p className="text-white/60 text-lg max-w-sm">
                                Every great project starts with a single task. Define your goals and stay organized.
                            </p>
                            
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 text-sm text-white/50">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">1</div>
                                    <span>Set a clear and concise title</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/50">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">2</div>
                                    <span>Define priority (1 - low, 10 - high)</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <CreateTodoForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}