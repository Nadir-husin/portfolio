import Navbarr from "./scenes/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() =>{
    document.title ="My Portfolio";
  },[])
  return (
    <div className="app">
        <Navbarr/>
    </div>
  );
}

export default App;
