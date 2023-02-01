import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Slide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
