type TaskItemProps = {
    id: number;
    title: string;
    description: string | undefined;
    done: boolean;
    priority: number;
}

export default function TaskItem({ id, title, description, done, priority }: TaskItemProps) {
    return (
        <li key={id} className={`
            list-none p-5 mb-4 rounded-xl border border-indigo-100/20
            bg-gradient-to-br from-slate-900 to-indigo-950
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            backdrop-blur-sm transition-all duration-300 hover:scale-[1.01]
            flex items-center justify-between gap-4
            ${done ? 'opacity-60 grayscale-[0.3]' : ''}
        `}>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className={`text-lg font-semibold text-white tracking-tight ${done ? 'line-through text-slate-400' : ''}`}>
                        {title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        P{priority}
                    </span>
                </div>
                <p className={`text-sm leading-relaxed ${done ? 'text-slate-500' : 'text-indigo-200/70'}`}>
                    {description}
                </p>
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    readOnly
                    checked={done}
                    className="w-6 h-6 rounded-lg border-2 border-indigo-400 bg-transparent 
                            text-violet-600 focus:ring-violet-500 focus:ring-offset-slate-900
                            cursor-pointer transition-colors"
                />
            </div>
        </li>
    );
}