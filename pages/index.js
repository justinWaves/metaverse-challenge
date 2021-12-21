import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-zinc-900">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="three.r119.min.js"></script>
        <script src="vanta.waves.min.js"></script>
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
