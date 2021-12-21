import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-emerald-300 border-b-2 border-emerald-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image layout="fill" objectFit="cover" src="/WavesLogoWhite.png" />
        </div>

        <div className="col-span-4 text-left  lg:text-center flex flex-row justify-self-center items-end">
          <div className="relative h-40 w-40 lg:mx-auto ">
            <Avatar logoutOnPress />
          </div>

          <div>
            <h1 className="text-xl text-gray-200">Welcome to MetaWaves Chat</h1>

            <h2 className="text-5xl font-bold truncate">
              {user.getUsername()}
            </h2>
          </div>

          {/* Change Username Component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
