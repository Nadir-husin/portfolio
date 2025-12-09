import Linegradient from "./components/LineGradient";
import Landing from "./scenes/Landing";
import Navbarr from "./scenes/Navbar";
import { useEffect } from "react";
import Skills from "./scenes/Skills";

function App() {
  useEffect(() =>{
    document.title ="NH Portfolio";
  },[])



  return (
    <div className="app py-4">
        <Navbarr/>
        <Landing/>
        <Linegradient />
        <Skills/>
    </div>
  );
}

export default App;
