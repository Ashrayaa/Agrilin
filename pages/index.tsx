import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Signup from "../components/Signin/Signin";
import Topnav from '../components/Topnav/Topnav';


const Home: NextPage = () => {
  return (
    <div className='lg:px-0 p-6 lg:py-8'>
      <Head>
        <title>Agrilin</title>
        <meta name="description" content="Agrilin" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Topnav/>
      <Signup/>
      <Footer/>
     
    </div>
  )
}
export default Home
