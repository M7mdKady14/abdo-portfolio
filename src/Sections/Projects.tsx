import AnimatedContent from "../components/AnimatedContent";
import BorderGlow from "../components/BorderGlow";
import { flexiWebsite, paper } from "../Links";

import flexiVideo from "../assets/flexi.mp4";

type AnimationOptions = {
  direction?: "horizontal" | "vertical";
  reverse?: boolean | undefined;
  threshold?: number;
};

type CardData = {
  icon: string;
  title: string;
  text: string;
  animation?: AnimationOptions;
  className: string;
  video?: string;
  button?: string;
  buttonText?: string;
  buttonIcon?: string;
};

const aboutCards: CardData[] = [
  {
    icon: "psychology",
    title: "Flexi - AI fitness Coach",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam et voluptatum assumenda voluptatem dolorem placeat reiciendis illum a, velit eos laudantium qui consequatur quam suscipit vero aliquid ipsa quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae nostrum quisquam cum. Dicta iusto animi rerum vitae nobis ratione",
    className: "md:col-span-2 md:row-span-2",
    video: flexiVideo,
    button: flexiWebsite,
    buttonText: "flexi website",
    animation: {
      direction: "horizontal",
      reverse: true,
    },
  },
  {
    icon: "science",
    title: "Published Energy AI Research",
    text: "Co-authored research on photovoltaic power generation forecasting using Bayesian optimization and stacked ensemble learning.",
    className: "md:col-span-1 md:row-span-2",
    button: "https://doi.org/10.1016/j.rineng.2025.104950",
    buttonIcon: paper,
    buttonText: "ScienceDirect",
    animation: {
      direction: "vertical",
      reverse: true,
    },
  },
  {
    icon: "code_blocks",
    title: "label it",
    text: "Comfortable shaping clean applications from interface to logic, connecting strong engineering fundamentals with modern development workflows.",
    className: "md:col-span-2",
    animation: {
      direction: "vertical",
      threshold: 0.1,
    },
  },
  {
    icon: "account_tree",
    title: "noteNest",
    text: "Works with complex datasets, predictive models, and optimization techniques to create systems that can learn patterns and support better decisions.",
    className: "md:col-span-1",
    animation: {
      direction: "horizontal",
      threshold: 0.1,
    },
  },
];

const titleDelay = 0;

export function Projects() {
  return (
    <section
      className="my-36 px-margin-desktop max-w-container-max mx-auto"
      id="projects"
    >
      <div className="flex flex-col gap-16 items-center">
        <AnimatedContent
          reverse
          container={".scroll-container"}
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.2}
          delay={titleDelay}
        >
          <h2 className="text-4xl text-slate-300 font-bold">My Projects</h2>
        </AnimatedContent>
        <div className="grid max-w-7xl auto-rows-[minmax(160px, auto)] grid-cols-1 gap-4 md:grid-cols-3">
          {aboutCards.map((card) => (
            <AnimatedContent
              key={card.title}
              container={".scroll-container"}
              distance={60}
              duration={1.3}
              initialOpacity={0.0}
              threshold={0.2}
              delay={0.2}
              className={`${card.className}`}
              {...card.animation}
            >
              <BorderGlow
                className={`h-full w-full p-6  flex flex-col group hover:-translate-y-1 duration-300`}
                backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
                coneSpread={5}
                glowIntensity={0.5}
                glowColor="200.56 97.87 85.94"
                edgeSensitivity={-8888}
                colors={[]}
              >
                <div
                  className={`flex h-full gap-8 ${
                    card.video ? "flex-col md:flex-row" : "flex-col"
                  }`}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 duration-300">
                        {card.title}
                      </h3>
                      <span
                        className={`material-symbols-outlined text-3xl text-slate-300 group-hover:text-cyan-400 duration-300`}
                      >
                        {card.icon}
                      </span>
                    </div>
                    <p className="max-w-xl text-base leading-relaxed text-slate-300">
                      {card.text}
                    </p>
                    {card.button && (
                      <a
                        className="bg-cyan-400 text-slate-900 px-10 py-4 mt-auto rounded-2xl font-headline-lg text-lg font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
                        href={card.button}
                      >
                        {card.buttonIcon && (
                          <img src={card.buttonIcon} className="h-20"></img>
                        )}
                        {card.buttonText}
                      </a>
                    )}
                  </div>
                  {card.video && (
                    <div className="w-full overflow-hidden rounded-4xl border border-white/10 bg-slate-950/40 md:w-[44%]">
                      <video
                        src={card.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="aspect-video h-130 shrink-0"
                      ></video>
                    </div>
                  )}
                </div>
              </BorderGlow>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
