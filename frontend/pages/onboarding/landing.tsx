import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-black">
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
            <div className="absolute w-full text-center top-6 mb-8 text-white font-bold text-3xl">
                travyl
            </div>
        </div>
    );
}