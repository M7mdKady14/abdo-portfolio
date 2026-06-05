import AnimatedContent from "../components/AnimatedContent";
import BorderGlow from "../components/BorderGlow";

import CV from "../assets/cv.pdf";
import profileImage from "../assets/profile.jpg";

const roleDelay = 0;
const nameDelay = 0.4;
const pictureDelay = 0.8;
const bioDelay = 0.8;
const viewProjectsDelay = 1.5;
const contactDelay = 1.5;

export function Hero() {
  return (
    <section className="relative flex items-center pt-36 overflow-hidden text-center">
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex items-center lg:flex-row flex-col gap-8 justify-center">
        <div className="max-w-3xl items-center flex flex-col ">
          <AnimatedContent
            container={".scroll-container"}
            reverse
            distance={40}
            duration={1.2}
            initialOpacity={0.2}
            delay={roleDelay}
          >
            <span className="font-label-caps text-label-caps text-emerald-300 mb-4 block tracking-widest uppercase">
              AI &amp; Software Engineer
            </span>
          </AnimatedContent>
          <AnimatedContent
            container={".scroll-container"}
            reverse
            distance={40}
            duration={1.2}
            initialOpacity={0.0}
            delay={nameDelay}
          >
            <h1 className="font-headline-xl text-headline-xl text-slate-300 mb-6 leading-tight ">
              <span className="text-cyan-400">Abdelrhman </span>
              <span className="text-emerald-300">Ahmed </span>: Building the
              Future with
              <span className="text-primary-container"> AI &amp; Code </span>
            </h1>
          </AnimatedContent>
          <AnimatedContent
            container={".scroll-container"}
            reverse
            direction="horizontal"
            distance={50}
            duration={1.2}
            initialOpacity={0}
            ease="expo"
            delay={bioDelay}
          >
            <BorderGlow
              className={`p-4 group hover:-translate-y-1 duration-300 mb-10`}
              backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
              coneSpread={5}
              glowIntensity={0.5}
              glowColor="200.56 97.87 85.94"
              edgeSensitivity={-8888}
              colors={[]}
            >
              <p className="font-body-lg text-center text-body-lg text-slate-300 leading-relaxed max-w-2x">
                A dedicated software engineer specializing in artificial
                intelligence and machine learning. Transforming complex data
                into intelligent, high-performance software solutions for
                tomorrow's challenges.
              </p>
            </BorderGlow>
          </AnimatedContent>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedContent
              container={".scroll-container"}
              reverse
              direction="horizontal"
              distance={40}
              duration={1.2}
              initialOpacity={0.0}
              delay={viewProjectsDelay}
              ease="expo"
            >
              <a
                className="group bg-primary-container text-on-primary px-8 py-4 rounded-lg font-headline-lg text-code-sm font-bold flex items-center gap-4 transition-all hover:brightness-110 active:scale-95"
                href="#projects"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className="fill-slate-900 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z" />
                    </g>
                  </g>
                </svg>
                View Projects
              </a>
            </AnimatedContent>
            <AnimatedContent
              container={".scroll-container"}
              direction="horizontal"
              distance={40}
              duration={1.2}
              initialOpacity={0.0}
              delay={contactDelay}
              ease="expo"
            >
              <a
                href={CV}
                download={"abdelrhman Ahmed CV.pdf"}
                className="group border border-primary-container text-primary-container px-8 py-4 rounded-lg font-headline-lg text-code-sm font-bold flex items-center gap-4 transition-all hover:bg-primary-container/10 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  className="fill-cyan-400 group-hover:translate-y-0.5  duration-300"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
                </svg>
                Download Resume
              </a>
            </AnimatedContent>
          </div>
        </div>
        <AnimatedContent
          container={".scroll-container"}
          direction="horizontal"
          distance={80}
          duration={1.2}
          initialOpacity={0.0}
          delay={pictureDelay}
          ease="expo"
        >
          <div className="h-max shrink-0 w-100">
            <BorderGlow
              className={`h-full w-full flex flex-col group hover:-translate-y-1 duration-300`}
              backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
              coneSpread={5}
              glowIntensity={2}
              glowColor="200.56 97.87 85.94"
              edgeSensitivity={-8888}
              colors={[]}
            >
              <img className="rounded-4xl" src={profileImage} alt="Profile" />
            </BorderGlow>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
