import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Services />

      <WhyChoose />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;