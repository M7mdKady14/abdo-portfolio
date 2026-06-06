import AnimatedContent from "../components/AnimatedContent";
import BorderGlow from "../components/BorderGlow";
import { flexiWebsite, paper } from "../Links";

import flexiVideo from "../assets/flexi.mp4";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type AnimationOptions = {
  direction?: "horizontal" | "vertical";
  reverse?: boolean | undefined;
  threshold?: number;
};

type CardData = {
  icon: React.ReactNode;
  title: string;
  text: string | ReactNode;
  animation?: AnimationOptions;
  className: string;
  video?: string;
  button?: string;
  buttonText?: string;
  buttonIcon?: string;
};

const aboutCards: CardData[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
      >
        <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm-2.5-117.5Q420-495 420-520t17.5-42.5Q455-580 480-580t42.5 17.5Q540-545 540-520t-17.5 42.5Q505-460 480-460t-42.5-17.5Z" />
      </svg>
    ),
    title: "Flexi - AI fitness Coach",
    text: (
      <ul className="flex flex-col gap-3">
        <li>
          Developed a full-stack AI backend for automated posture analysis and
          flexibility assessment using pose detection
        </li>
        <li>
          Built a high-performance PostgreSQL layer to store and query
          biomechanical metrics efficiently
        </li>
        <li>
          Created data pipelines to transform raw pose data into actionable
          fitness insights
        </li>
        <li>
          Implemented standardized error handling, automated testing with
          pytest, and optimized API performance.
        </li>
      </ul>
    ),
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
      >
        <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" />
      </svg>
    ),
    title: "Published Energy AI Research",
    text: (
      <ul className="flex flex-col gap-3">
        <li>
          Performed exploratory data analysis and feature engineering to model
          solar PV power generation pattern
        </li>
        <li>
          Developed predictive forecasting models using Bayesian optimization
          and stacked ensemble learning to improve accuracy and robustness
        </li>
        <li>
          Optimized model hyperparameters and evaluated performance across
          multiple metrics
        </li>
        <li>
          Implemented standardized error handling, automated testing with
          pytest, and optimized API performance.
        </li>
      </ul>
    ),
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
      >
        <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
      </svg>
    ),
    title: "label it",
    text: (
      <ul className="flex flex-col gap-3">
        <li>
          Built an end-to-end pose estimation pipeline to extract body
          keypoints, calculate biomechanical joint angles, and detect posture
          issues in real time
        </li>
        <li>
          Implemented a rule-based posture classification engine and angle-based
          calculators for exercises such as squats and jumping jacks
        </li>
      </ul>
    ),
    className: "md:col-span-2",
    animation: {
      direction: "vertical",
      threshold: 0.1,
    },
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-slate-300 group-hover:fill-cyan-400 duration-300"
      >
        <path d="M600-120v-120H440v-400h-80v120H80v-320h280v120h240v-120h280v320H600v-120h-80v320h80v-120h280v320H600ZM160-760v160-160Zm520 400v160-160Zm0-400v160-160Zm0 160h120v-160H680v160Zm0 400h120v-160H680v160ZM160-600h120v-160H160v160Z" />
      </svg>
    ),
    title: "noteNest",
    text: (
      <ul className="flex flex-col gap-3">
        <li>
          Designed and developed a collaborative web platform enabling students
          and teachers to create, organize, and share notes in secure virtual
          classrooms
        </li>
        <li>
          Engineered a database-driven backend with optimized MySQL schema
          design, migrations, and efficient query handling
        </li>
      </ul>
    ),
    className: "md:col-span-1",
    animation: {
      direction: "horizontal",
      threshold: 0.1,
    },
  },
];

const titleDelay = 0;

function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="aspect-video h-130 shrink-0"
    />
  );
}

export function Projects() {
  return (
    <section
      className="my-36 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto"
      id="projects"
    >
      <div className="flex flex-col gap-16 items-center">
        <AnimatedContent
          reverse
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.1}
          delay={titleDelay}
        >
          <h2 className="text-4xl text-slate-300 font-bold">My Projects</h2>
        </AnimatedContent>
        <div className="grid max-w-7xl auto-rows-[minmax(160px, auto)] grid-cols-1 gap-4 md:grid-cols-3">
          {aboutCards.map((card) => (
            <AnimatedContent
              key={card.title}
              distance={60}
              duration={1.3}
              initialOpacity={0.0}
              threshold={0.1}
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
                  <div className="flex flex-1 flex-col gap-8">
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
                    <div className="max-w-xl text-base leading-relaxed text-slate-300">
                      {card.text}
                    </div>
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
                      <ProjectVideo src={card.video} />
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
