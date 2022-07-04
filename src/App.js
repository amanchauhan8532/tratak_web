import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import HowDoYoga from "./Components/HowDoYoga";
import DoYogaEveryDay from "./Components/DoYogaEveryDay";
import Footer from "./Components/Footer";

function App() {
  return (
    
     
      
      <div>

      {/* Different components of the page rendered here */}
      <Navbar/>
      <Home/>
        <About/><br></br>
        <hr></hr>
        <HowDoYoga/>
        <hr></hr>
        <DoYogaEveryDay/>
        <Footer/>
    </div>
  );
}

export default App;
