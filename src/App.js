import Linegradient from "./components/LineGradient";
import Landing from "./scenes/Landing";
import Navbarr from "./scenes/Navbar";
import { useEffect } from "react";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/footer";

function App() {
  useEffect(() =>{
    document.title ="NH Portfolio";
  },[])



  return (
    <div className="app">
        <Navbarr/>
        <Landing/>
        <Linegradient />
        <Skills/>
        <Linegradient />
        <Projects/>
        <Linegradient />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
