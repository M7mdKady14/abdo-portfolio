import { Footer } from "./Sections/Footer";
import LetterGlitch from "./components/LetterGlitch";
import { Achievements } from "./Sections/Achievements";
import { Contact } from "./Sections/Contact";
import { Hero } from "./Sections/Hero";
import { Navbar } from "./Sections/Navbar";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";

function App() {
  return (
    <>
      <div className="scroll-container relative w-full h-screen overflow-y-scroll">
        {/* Background layer */}
        <div className="fixed inset-0 -z-20">
          <LetterGlitch
            glitchSpeed={80}
            centerVignette={true}
            outerVignette={true}
            smooth
            glitchColors={["#213f45", "#455f5f", "#23465a"]}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
          />
        </div>
        <div className="container-max mx-auto relative">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
