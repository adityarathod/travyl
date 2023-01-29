/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <div className="video-wrapper"> */}
      <video autoPlay loop className="background-video">
        <source src="/travyl.mp4" type="video/mp4" />
      </video>
      {/* </div> */}
      {/* <img
        src="/sample.jpg"
        alt="Next.js"
        className="absolute w-full h-full object-cover bg-position-left"
      /> */}
      <div className="absolute w-full h-full bg-black opacity-30">hi</div>
      <div className="absolute w-full text-center top-6 text-white font-bold text-3xl">
        travyl
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="text-white text-center font-medium text-5xl leading-[4rem]">
          <p>explore</p>
          <p>the world</p>
          <p>with AA</p>
        </div>
      </div>
      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <Link
          href="/onboarding/landing"
          className="py-3 block w-3/4 text-center font-medium text-xl bg-white rounded-full"
        >
          let's get started &rarr;
        </Link>
      </div>
    </div>
  );
}
