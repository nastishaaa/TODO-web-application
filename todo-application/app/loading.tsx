import { RingLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19]/70 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <RingLoader color="#6366f1" size={80} />
            </div>
        </div>
    );
}
