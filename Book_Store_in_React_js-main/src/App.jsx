/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import About from "./project/project1/About";
import Hero from "./project/project1/Hero";
import Navbar from "./project/project1/Navbar";
import PremumLarning from "./project/project1/PremumLarning";
import Testomonial from "./project/project1/Testomonial";
import Traks from "./project/project1/Traks";
import Footer from "./project/project1/Footer";


const App = () => {
  

  return (
   <>
 
 <Navbar/>

 <div className="lg:px-32  p-1 translate-y-16  " style={{backgroundImage:'url(src/assets/images/Herobg.png)'}} > 
 <Hero/>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96" > 
 <About/>
 </div>

 <div className=" lg:h-96  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96   " > 
 <div className=" lg:h-80 lg:px-32" style={{backgroundImage:'url(src/assets/images/Herobg.png)'}} >
 <PremumLarning/>
 </div>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96   " > 
 <Testomonial/>
 </div>

 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-72 sm:translate-y-80 translate-y-96" > 
 <Traks/>
 </div>

 
 <div className="lg:px-32  p-1 lg:translate-y-32 md:translate-y-80 sm:translate-y-80 translate-y-96" style={{backgroundImage:'url(src/assets/images/footer.png)'}} > 
 <Footer/>
 </div>
   </>
  );
};

export default App;
