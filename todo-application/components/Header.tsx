import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F19]/70 border-b border-white/10">
            <div className="flex items-center justify-between px-10 py-6 bg">
                <Link href="/" className="text-xl font-bold tracking-wide">Task-App</Link>
                <div className="flex items-center gap-4">
                    <Link
                    href="/tasks"
                    className="rounded-xl bg-white/10 px-5 py-2 text-sm hover:bg-white/20 transition"
                >
                    Open App →
                </Link>
                <Link
                    href="/create-todo"
                    className="rounded-xl bg-indigo-500/20 px-5 py-2  text-indigo-300 text-sm hover:bg-gradient-to-r from-indigo-500 to-pink-500 transition animate-[gradient_28s_ease-in-out_infinite]"
                >
                    Create Your Own Tasks 
                </Link>
                </div>
                
            </div>
        </header>
    );
}
