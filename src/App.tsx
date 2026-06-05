import { Footer } from "./Sections/Footer";
import { Achievements } from "./Sections/Achievements";
import { Contact } from "./Sections/Contact";
import { Hero } from "./Sections/Hero";
import { Navbar } from "./Sections/Navbar";
import { Projects } from "./Sections/Projects";
import { Skills } from "./Sections/Skills";
import PixelBlast from "./components/PixelPlast";

function App() {
  return (
    <>
      <div className="scroll-container relative w-full h-screen overflow-y-scroll">
        {/* Background layer */}
        <div className="fixed inset-0 -z-20">
          {/* <LetterGlitch
            glitchSpeed={80}
            centerVignette={true}
            outerVignette={true}
            smooth
            glitchColors={["#213f45", "#455f5f", "#23465a"]}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
          /> */}
          {/* <LightRays
            raysOrigin="top-center"
            raysColor="#5af7ff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          /> */}
          <PixelBlast
            variant="diamond"
            pixelSize={4}
            color="#0c4a6e"
            patternScale={0.5}
            patternDensity={1.4}
            pixelSizeJitter={0.75}
            enableRipples={false}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={2.45}
            edgeFade={0.12}
            transparent
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
