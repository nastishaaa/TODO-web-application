import { useAppDispatch, useAppSelector } from "@/hooks";
import { setStatusFilter } from "@/redux/tasks/slice";
import { selectStatusFilter } from "@/redux/tasks/selectors";

export default function FilterBar() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(selectStatusFilter) || 'all';

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'active', label: 'Active' },
        { id: 'done', label: 'Completed' },
    ] as const;

    return (
        <div className="flex p-1 mb-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-indigo-500/20 w-max">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => dispatch(setStatusFilter(filter.id))}
                    className={`
                        px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                        ${currentFilter === filter.id 
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                            : 'text-indigo-300 hover:text-white hover:bg-white/5'}
                    `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}