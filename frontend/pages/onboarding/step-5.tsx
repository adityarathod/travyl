import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
            <div className="absolute w-full text-center top-6 mb-8 text-sky font-bold text-3xl">
                travyl
            </div>

            <form>

            </form>

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
                        next &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}