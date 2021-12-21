import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-emerald-300 border-b-2 border-emerald-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://lh3.googleusercontent.com/j1AdR04hfWApKegjnnMdZdNSg7li3pMRvNCXK-ZG0DiO1GgyxfNzPZXgZ7YKiqpFmOLsVRJnBd5wfFwRsPBeOzXLsN1AaYn-BURIEgUR4yuD5BxBmTx0L1GbvQEAm3bK621AeGRq_OWTzbbUzax6Y8jglk9sx9jglJ2ewJx9Ny9xR8yer-mwkCoPMHflyPl0J7icfckCP8k5aYtI2al-S7JXyO0uypVEUerKy_BkKKou1F51-29FQhf-FVVG-J1ybS78xiFFnViSwtkXHkMAoxONO41Eur-WV9gbqOEACaRtpEOGjJi5ADRfAuiL4Ci3H_FJt6IPStEVVBYBg4EpZ5PeyUB1zBvUz2IOQSAvj7UoQW-xXJzS6KzrxQPqud0a_P_cDVF824ZuKs-eNI5JxxZ2Xp86DrGhsKU7hSziDSMzT_9bqY6S0pYCd0refgWsKwJ6uf3APXoBmE3zLKo7Nscei-U7VH7S-wklddrRgPFjhdGh2qNaW4l7YZoBFjj4TzzeNfzyZXZP_AiXBbwjUmNWKPO6FgHhA8KKZzsK1S8WK_cZqjAUtTXTtRK1xB08qalESillwSJtXg5C7V7BIpaWc9JZ3hkntCk_YJnRRKYpmtcGIjgvFmX3rae28TZy9zfeX17M4pUwcf9Ud1TL5pfOU8D8WakbMv2_X6-vhPVfxHICg60a3SD5f09uH9iJai0fyrk9lnkkHSZtRKeAZVQy=w882-h846-no?authuser=0"
          />
        </div>

        <div className="col-span-4 text-left  lg:text-center flex flex-row justify-self-center items-end">
          <div className="relative h-40 w-40 lg:mx-auto ">
            <Avatar logoutOnPress />
          </div>

          <div>
            <h1 className="text-xl text-gray-200">Welcome to WavesWorld</h1>

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
