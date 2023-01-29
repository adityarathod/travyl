import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
            <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
                travyl
            </div>
            <h1 className="mt-[150px] font-bold text-5xl text-center">about you</h1>
            <div>
                <form className="place-content-center mt-[100px] flex flex-col mt-30 justify-center">
                    <div className="flex flex-row">   
                        <label className="m-5 text-">Origin City: 
                            <input className="border-b-2 border-gray-300 p-2 w-full" type="text" name="name" />
                        </label>
                        <label className="m-5">Number of Travelers: 
                            <input className="border-b-2 border-gray-300 p-2 w-full" type="text" name="email" />
                        </label>
                    </div> 
                    <label className="m-5 font-sans">Intended Date of Travel: 
                        <input className="border-b-2 border-gray-300 p-2 w-full" type="date" name="location" />
                    </label>
                </form>
            </div>

            <div className="absolute bottom-9 w-full flex items-center justify-center">
                <div className="w-3/4 flex items-center justify-center">
                    <Link
                        href="/onboarding/step-4"
                        className="py-3 px-3 mr-2 aspect-square block text-center font-medium text-xl bg-gray-200 text-black rounded-full"
                    >
                        &nbsp;&larr;&nbsp;
                    </Link>
                    <Link
                        href=""
                        className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
                    >
                        finish &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}