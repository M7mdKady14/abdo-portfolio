import ScrollVelocity from "../components/ScrollVelocity";
import BorderGlow from "../components/BorderGlow";
import AnimatedContent from "../components/AnimatedContent";

const skills: string[] = [
  "python",
  "git",
  "js",
  "tensorflow",
  "flask",
  "fastapi",
  "postgres",
  "mysql",
  "mongodb",
  "graphql",
  "docker",
  "aws",
  "vscode",
];

const Bar = (
  <div className="flex">
    {skills.map((skill) => (
      <img
        key={skill}
        src={`https://skillicons.dev/icons?i=${skill}`}
        className="h-20 mx-4"
      />
    ))}
  </div>
);

const BarReversed = (
  <div className="flex">
    {skills.reverse().map((skill) => (
      <img
        key={skill}
        src={`https://skillicons.dev/icons?i=${skill}`}
        className="h-20 mx-4"
      />
    ))}
  </div>
);

const techLogos = [Bar, BarReversed];

const titleDelay = 0;
const skillsDelay = 0.4;

export function Skills() {
  return (
    <section className="my-36 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col gap-16 items-center">
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
          <h2 className="text-4xl text-slate-300 font-bold">My Skills</h2>
        </AnimatedContent>
        <AnimatedContent
          reverse
          container={".scroll-container"}
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.3}
          delay={skillsDelay}
        >
          <BorderGlow
            className={`min-h-40 p-6 group hover:-translate-y-1 duration-300 flex flex-row max-w-container-max`}
            backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
            coneSpread={5}
            glowIntensity={0.5}
            glowColor="200.56 97.87 85.94"
            edgeSensitivity={-8888}
            colors={[]}
          >
            <div className="flex gap-15 flex-col lg:flex-row">
              <ul className="text-lg leading-relaxed text-slate-300 flex flex-col gap-3 min-w-md text-center lg:text-start">
                <li>
                  <span className="text-cyan-400 font-bold text-xl">
                    Lorem ipsum
                  </span>{" "}
                  dolor sit amet, consectetur adipisicing elit. Architecto,
                  perspiciatis.
                </li>
                <li>
                  <span className="text-cyan-400 font-bold text-xl">
                    Lorem ipsum
                  </span>{" "}
                  dolor sit amet, consectetur adipisicing elit. Architecto,
                  perspiciatis.
                </li>
                <li>
                  <span className="text-cyan-400 font-bold text-xl">
                    Lorem ipsum
                  </span>{" "}
                  dolor sit amet, consectetur adipisicing elit. Architecto,
                  perspiciatis.
                </li>
                <li>
                  <span className="text-cyan-400 font-bold text-xl">
                    Lorem ipsum
                  </span>{" "}
                  dolor sit amet, consectetur adipisicing elit. Architecto,
                  perspiciatis.
                </li>
              </ul>
              <div className="overflow-hidden object-fill max-w-3xl">
                <ScrollVelocity
                  scrollerClassName="scroll-container"
                  numCopies={10}
                  texts={techLogos}
                />
              </div>
            </div>
          </BorderGlow>
        </AnimatedContent>
      </div>
    </section>
  );
}
