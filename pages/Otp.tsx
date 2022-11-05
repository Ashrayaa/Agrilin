import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Topnav from "../components/Topnav/Topnav";
import Otpbody from "../components/OTP/Otpbody";


const Otp: NextPage = () => {
  return (
    <div className="lg:px-0 p-6 lg:py-8">
      <Head>
        <title>Agrilin</title>
        <meta name="description" content="Agrilin" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Topnav />
      <Otpbody/>
      <Footer />
    
      
    </div>
  );
};
export default Otp;
