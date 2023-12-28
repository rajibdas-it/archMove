import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Gallery />
        <Features />
      </main>
    </>
  );
}

export default App;
