import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-sky"></div>
      <div className="absolute w-full text-center top-6 mb-8 text-white font-bold text-3xl">
        travyl
      </div>

      <div className="absolute w-full h-full flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">
          redirecting you to book
          <br />
          the <span style={{ color: "#55FFD2" }}>perfect</span> getaway
        </h1>
      </div>

      <div className="absolute bottom-9 w-full flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-center">
          <div className="py-3 block flex-1 flex items-center justify-center text-center font-medium text-xl text-white">
            <img src="/loading.svg" alt="loading" className="w-7 h-7 mr-4" />
            <span>loading AA.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
