import { useAppDispatch, useAppSelector } from "@/hooks";
import { setSearchQuery, setSortOrder, setStatusFilter } from "@/redux/tasks/slice";
import { selectSearchQuery, selectStatusFilter } from "@/redux/tasks/selectors";

export default function FilterBar() {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(selectStatusFilter) || 'all';
    const searchQuery = useAppSelector(selectSearchQuery);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'active', label: 'Active' },
        { id: 'done', label: 'Completed' },
    ] as const;

    return (
        <div className="flex justify-between p-1 mb-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-indigo-500/20 w-max">
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

            <input
                type="text"
                placeholder="Search tasks..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 transition"
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            
            <select
                className="bg-[#111827] border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500"
                onChange={(e) => dispatch(setSortOrder(e.target.value))}
            >
                <option value="desc">Priority: High to Low</option>
                <option value="asc">Priority: Low to High</option>
            </select>
        </div>
    );
}