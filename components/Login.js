import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I am the login screen</h1>

      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className=""
          src="https://lh3.googleusercontent.com/Gp5jFh6qaqoBNvGjDyTKMjCV0pn3X6Dy6BEYRB7bg7DdU3zpQmRShiJhQ71hTIOxzYnJbwFKjuY9vYtjOrI1k7N3W_eMI0qwJDjvYB9CvdaPVas4_EzsX8vac5y_t3vsEuYfWxiQPdM2bZ89kx31ryGE4QXkxmN_H25xbOmtaG23Ri-i90l-xpd8PGXP0F9nawxTV9AiLExEllFZnuUGtRIrQcSTB4EwUm-40ziklHS62_8nFivSz2co0cevpgMRl2RSEfofqHzoHcv0rInyXQBHN9RlCmD6dG_tlSjOaWZJAVuCLIYb7b_zDFuGt9AN_a01tjkWOdtsZfgbOfaKRSO_WWFSypL_iePb83p6b88DgKX41MjnflYBFIEj-jhm8yPz0EgW-VUjdyqP07ZvYJarCWhZC2ObE_bBUr8lPD5MC4E77gFsMuBJaqg_V_pYhyibBcd3dzsWi3okqmtKmDJRwO431vYst7Tu8HmRAQuVLTGOtQELeHnZ_PCDD3UgKXr48jp34ehgMcA-ekawUa5zirqoZ1lVZrp6ZpxMN_EPS4nRe70mJkSkVqmrlcQD1NsyCCGFnLzCnOZ32Re7MeiicWIPrFCZ8qak51qo5rSXTHsgfitHaLx68oe7rfeAywOzHOjgB6DkQgNyWY7AtPU0JxNsPjOhKKOODmMsuggCTqz6rCLxkQF_j0akeU0Glf6J71hiAQqV4YIZ1NSiqI_X=w500-h480-no?authuser=0"
          height={200}
          width={200}
        />

        <button
          onClick={authenticate}
          className="bg-purple-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to WavesWorld
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://lh3.googleusercontent.com/7kaBK-Ee03lfblpjzshqGnTlivWvoh0IfQpe2UShmuGhiVuWzR65zACleO0-wAIUiFSNt5Wo8hhnwV5niZJ4LyuDIuIE0RsEPJRue6hgdS_9Y-FTmSIA6A5PX08GkQ38axIUB5M_sToY3AzTPY7weOnl5b9R8D2yJQ-DcfssNG1iTnmMLkQTSjdCarfKeUnoADlwSCqQCTz2asz8elzREsC12abSHnl3WjDsdx8mOUcHhYOJj27VOji-pE3OVCS8euX8yoZAxo39FNXYmphzLH63n56nC_RZb1mubOBFXn6HURWym17FN3dpNsJRAXNa-kjFQ0loutDUCVoCqW1GTQC0Ziw7USfjPkFGqhtC5Dxq-I8LapILgjOI89mOjQaTAYpBIwXBvlHbdQMMGsSgEiA24iEmlqdST9ra-xyRB9pNklNHupkOmUMc98yo2qBfcdIxr-vlvAszh9kCWhDEMCNCXj91u8_Syj5Ub-GbZa0xaNzGO8MBrcWNRePIQOolg4TyFacOV9HjMzx9Eyn_LRnNAVArhCnkrthkLxS9t-nmCaOTYOZiDPlD-3jCtq82Ewvq3rt4xLmMfxl4JPIE3gLtxyr8-5JiF70pJKDRwfTQ4w50tKr3GnkswKhNcH7_89hcUkaN45iuy1Jw4qPfhlEN__DkZqK40ibOjsct_hd1fOAGGKIHitH5EsTyPvCkNEuLRKAnGq0WAOsSl0leqB--=w1487-h1115-no?authuser=0"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
