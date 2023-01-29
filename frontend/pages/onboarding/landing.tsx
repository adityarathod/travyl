import NewlineText from "@/components/newline-text";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  const steps = [
    "fill this out\nwith your friends",
    "tell us what\nyou like",
    "sit back while\nwe plan your trip",
  ];

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral"></div>
      <main className="flex flex-col items-center justify-center">
        <section className="mt-14">
          <h1 className="text-5xl font-bold leading-[1.4]">
            <span className="tracking-tight text-sky">travyl</span>
            <br />
            is all about
            <br />
            <span className="underline">your</span> interests.
          </h1>
        </section>

        <section className="mt-20">
          {steps.map((step, idx) => (
            <div className="grid grid-cols-4 mb-10" key={idx}>
              <div className="col-span-1 w-3 h-3 p-8 flex items-center justify-center text-neutral bg-black rounded-full font-bold text-4xl">
                {idx + 1}
              </div>
              <div className="col-span-3 ml-2 font-bold text-3xl">
                <NewlineText text={step} />
              </div>
            </div>
          ))}
        </section>
      </main>

      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center">
          <Link
            href="/"
            className="py-3 px-3 mr-2 aspect-square block text-center font-medium text-xl bg-gray-200 text-black rounded-full"
          >
            &nbsp;&larr;&nbsp;
          </Link>
          <Link
            href="/onboarding/step-2"
            className="py-3 block flex-1 text-center font-medium text-xl bg-sky text-white rounded-full"
          >
            next &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
