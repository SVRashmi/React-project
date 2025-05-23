import Nav from './Components/Header';
import Footer from "./Components/Footer";
import Slider from "./Components/Sliders";
import './App.css';
import AboutUs from './Components/AboutUs';
import Carouel from './Components/Carouel';
function App() {
  return (
    <div>
    {/* Ensure Header is at the Top */}
    <header className="header">
    <Nav />
    <Carouel/>
    </header> <br/><br/>
    
    {/* Main Content */}
    <main> {/* Add margin to avoid overlap */}
    <section>
    <AboutUs />
    </section>
    
    </main>
    
    {/* Footer */}
    <footer>
    {<Footer />}
    
    </footer>
    </div>
  );
}

export default App;
