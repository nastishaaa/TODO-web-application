export default function Footer() {
    return (
        <footer className="backdrop-blur-xl bg-[#0B0F19]/70 pt-6 text-center text-indigo-300 text-sm border-tborder-t border-white/10 p-12">
            <p>&copy; {new Date().getFullYear()} My Task-App. All rights reserved.</p>
        </footer>
    );
}
