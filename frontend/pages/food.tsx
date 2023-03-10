/* export default function Home() {
    return (
        <div>
            <div className="absolute w-full text-center top-6 text-[#0078D2] font-bold text-3xl">
                travyl
            </div>
            <div className="absolute w-full text-center top-6 text-black font-bold text-3xl">
                pick a cuisine
            </div>
        </div>
    );
} */
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="absolute w-full text-center top-6 text-[#0078D2] font-bold text-3xl">
                travyl
            </div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center">
                <div className="text-black text-center font-medium text-5xl leading-[4rem]">
                    <p>pick a cuisine</p>
                </div>
                <div className="h-1/2 w-1/2 pt-20">
                    <img className="object-fill aspect-square rounded-full" src="/thai.jpeg"></img>
                </div>
                <div className="text-black text-center font-medium text-5xl leading-[4rem]">
                    <p>thai</p>
                </div>
            </div>
            <div className="absolute bottom-9 w-full flex items-center justify-center">
                <button className="py-3 w-3/4 font-medium text-xl text-white bg-blue-500 rounded-full">
                    next
                </button>
            </div>
        </div>
    );
}