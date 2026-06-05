import AnimatedContent from "../components/AnimatedContent";
import BorderGlow from "../components/BorderGlow";

import HultImage from "../assets/hult.jpeg";
import ClashOfCodersImage from "../assets/clashOfCoders.jpeg";

const titleDelay = 0;
const codersDelay = 0.4;
const hultDelay = 0.4;

export function Achievements() {
  return (
    <section className="my-36 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col gap-8 items-center">
        <AnimatedContent
          reverse
          container={".scroll-container"}
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.3}
          delay={titleDelay}
        >
          <h2 className="text-4xl text-slate-300 font-bold">My Achievements</h2>
        </AnimatedContent>
        <div className="flex flex-col gap-8 md:flex-row">
          <AnimatedContent
            reverse
            container={".scroll-container"}
            direction="horizontal"
            distance={40}
            duration={1.2}
            initialOpacity={0.0}
            threshold={0.3}
            delay={codersDelay}
          >
            <BorderGlow
              className={`min-h-40 max-w-lg p-6 group hover:-translate-y-1 duration-300 flex flex-row`}
              backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
              coneSpread={5}
              glowIntensity={0.5}
              glowColor="200.56 97.87 85.94"
              edgeSensitivity={-8888}
              colors={[]}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 duration-300">
                    Clash of Coders 1st Place
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
                  >
                    <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
                  </svg>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  obcaecati, inventore nobis expedita, consectetur eaque magni
                  ut delectus architecto, praesentium molestiae omnis quasi
                  doloremque tenetur illum repellat facilis nesciunt! Omnis.
                </p>
                <img
                  src={ClashOfCodersImage}
                  alt=""
                  className="w-full h-130 object-cover rounded-2xl"
                />
              </div>
            </BorderGlow>
          </AnimatedContent>
          <AnimatedContent
            container={".scroll-container"}
            direction="horizontal"
            distance={40}
            duration={1.2}
            initialOpacity={0.0}
            threshold={0.3}
            delay={hultDelay}
          >
            <BorderGlow
              className={`min-h-40 max-w-lg p-6 group hover:-translate-y-1 duration-300 flex flex-row`}
              backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
              coneSpread={5}
              glowIntensity={0.5}
              glowColor="200.56 97.87 85.94"
              edgeSensitivity={-8888}
              colors={[]}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 duration-300">
                    Hult Prize 2nd Place
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
                  >
                    <path d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z" />
                  </svg>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  obcaecati, inventore nobis expedita, consectetur eaque magni
                  ut delectus architecto, praesentium molestiae omnis quasi
                  doloremque tenetur illum repellat facilis nesciunt! Omnis.
                </p>
                <img
                  src={HultImage}
                  alt=""
                  className="w-full h-130 object-cover rounded-2xl"
                />
              </div>
            </BorderGlow>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
