import Linegradient from "./components/LineGradient";
import Landing from "./scenes/Landing";
import Navbarr from "./scenes/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() =>{
    document.title ="My Portfolio";
  },[])



  return (
    <div className="app py-4">
        <Navbarr/>
        <Landing/>
        <Linegradient />
    </div>
  );
}

export default App;
