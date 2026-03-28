import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Allpackage from "./Allpackage";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Navbar/>
<Hero/>
<Services/>
     <Allpackage/>
     <CalltoAction/>
     <Footer/>
    </>
  
  );
}

export default Home;