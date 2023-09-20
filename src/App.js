import { useEffect } from "react";
import Aos from "aos"

import "./app.css"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";



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
      < Portfolio />
    </main>

   < Footer />
   </>
  );
   
		
  
}

export default App;
