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
                  <span
                    className={`material-symbols-outlined text-3xl text-slate-300 group-hover:text-cyan-400 duration-300`}
                  >
                    trophy
                  </span>
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
                  <span
                    className={`material-symbols-outlined text-3xl text-slate-300 group-hover:text-cyan-400 duration-300`}
                  >
                    celebration
                  </span>
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
