import './css/style.scss'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Header from './components/Header';
import LeftNavbar from './components/LeftNavbar'
import Slider from './components/Slider'

function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["What are you looking for?", "Custom design?",  "Full responsive design?","Is it clean code?","All here!"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      //typeSpeed: 40,
      typeSpeed: 10,
      backSpeed: 20,
      //backDelay: 3000,
      backDelay: 500,
      smartBackspace: false,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      onComplete : () => {
        setTimeout(() => {
          document.getElementById("root").classList.add("welcomeEnd");
        }, 2000);
      }
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Slider />
      </main>
      <LeftNavbar />
      <div className="welcome">
        <span ref={el}></span>
      </div>
    </div>
  );
}

export default App;
