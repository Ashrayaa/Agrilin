import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Topnav from "../components/Topnav/Topnav";
import Createaccount from "../components/Register/Createaccount";

const Register: NextPage = () => {
  return (
    <div className="lg:px-0 p-6 lg:py-8">
      <Head>
        <title>Agrilin</title>
        <meta name="description" content="Agrilin" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Topnav />
      <Createaccount />
      <Footer />
    </div>
  );
};
export default Register;
