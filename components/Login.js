import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-200">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image className="" src="/jwaveslogo.png" height={200} width={200} />

        <button
          onClick={authenticate}
          className="bg-emerald-200 rounded-lg p-5 font-bold animate-pulse "
        >
          Login to MetaWaves Chat
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/bm-plane.JPG" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
