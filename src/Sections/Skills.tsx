// import ScrollVelocity from "../components/ScrollVelocity";
import BorderGlow from "../components/BorderGlow";
import AnimatedContent from "../components/AnimatedContent";

const skills: string[] = [
  "python",
  "git",
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
  <div className="grid gap-2 grid-cols-4 md:grid-cols-6 lg:grid-cols-12 place-items-center">
    {skills.map((skill) => (
      <img
        key={skill}
        src={`https://skillicons.dev/icons?i=${skill}`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-10"
      />
    ))}
  </div>
);

// const BarReversed = (
//   <div className="flex">
//     {[...skills].reverse().map((skill) => (
//       <img
//         key={skill}
//         src={`https://skillicons.dev/icons?i=${skill}`}
//         alt=""
//         loading="lazy"
//         decoding="async"
//         className="h-20 mx-4"
//       />
//     ))}
//   </div>
// );

// const techLogos = [Bar, BarReversed];

const titleDelay = 0;
const skillsDelay = 0.4;

export function Skills() {
  return (
    <section className="my-36 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col gap-16 items-center">
        <AnimatedContent
          reverse
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.2}
          delay={titleDelay}
        >
          <h2 className="text-4xl text-slate-300 font-bold">
            Skills And Experience
          </h2>
        </AnimatedContent>
        <AnimatedContent
          reverse
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.2}
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
            <div className="flex gap-5 flex-col">
              <ul className="text-lg leading-relaxed text-slate-300 flex flex-col gap-3 text-center lg:text-start">
                <li className="flex gap-3 flex-col">
                  <div className="flex justify-between items-end">
                    <p className="text-cyan-400 font-bold text-xl">
                      Software Engineer at CareCode
                    </p>
                    <span className="text-sm text-slate-300">
                      2024 - present
                    </span>
                  </div>
                  <p>
                    responsible for computer vision tasks and the AI model
                    training and refining.
                  </p>
                </li>
                <li className="flex gap-3 flex-col">
                  <div className="flex justify-between items-end">
                    <p className="text-cyan-400 font-bold text-xl">
                      Bachelor of Science in Computer at Suez University
                    </p>
                    <span className="text-sm text-slate-300">
                      2024 - present
                    </span>
                  </div>
                  <p>
                    Current GPA: 3.56 / 4.00 (
                    <span className="text-cyan-300">Very Good</span>) | Third
                    year
                  </p>
                </li>
              </ul>
              <div>{Bar}</div>
              {/* <div className="overflow-hidden object-fill max-w-3xl">
                <ScrollVelocity numCopies={10} texts={techLogos} />
              </div> */}
            </div>
          </BorderGlow>
        </AnimatedContent>
      </div>
    </section>
  );
}
