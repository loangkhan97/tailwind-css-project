<<<<<<< HEAD
import { useEffect } from "react";
import Aos from "aos"

import "./app.css"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";



function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
   <>
   < Header />

    <main>
      < Hero />
      < Services />
    </main>

   < Footer />
   </>
  );
   
		
  
=======
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
  );
>>>>>>> master
}

export default App;
