import AnimatedContent from "../components/AnimatedContent";
import BorderGlow from "../components/BorderGlow";
import { email, linkedIn, number, whatsapp } from "../Links";
import grooveVideoPath from "../assets/groove-battle.mp4";
import { useRef, useState } from "react";

const titleDelay = 0;
const contactDelay = 0.4;

export function Contact() {
  const [groovePlaying, setGroovePlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (formData: FormData) => {
    if (formData.get("name")?.toString().toLowerCase().includes("groove")) {
      setGroovePlaying(true);
    }
  };

  const groove = (
    <video
      ref={videoRef}
      src={grooveVideoPath}
      autoPlay
      onEnded={() => setGroovePlaying(false)}
      className="fixed inset-0 w-screen h-screen z-100 object-fill"
    ></video>
  );

  return (
    <section className="my-48 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
      {groovePlaying && groove}
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
          <h2 className="text-4xl text-slate-300 font-bold">Contact</h2>
        </AnimatedContent>
        <AnimatedContent
          reverse
          direction="vertical"
          distance={40}
          duration={1.2}
          initialOpacity={0.0}
          threshold={0.2}
          delay={contactDelay}
        >
          <BorderGlow
            className={`min-h-40 p-8 group duration-300 flex flex-row`}
            backgroundColor="oklch(12.9% 0.042 264.695 / 75%)"
            coneSpread={5}
            glowIntensity={0.5}
            glowColor="200.56 97.87 85.94"
            edgeSensitivity={-8888}
            colors={[]}
          >
            <div className="flex flex-1 gap-8">
              {/* Background Decoration */}
              <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
                <div className="flex flex-col gap-6 ">
                  <h2 className="font-headline-xl text-headline-xl text-slate-100">
                    Let's build something{" "}
                    <span className="text-cyan-400">exceptional</span>.
                  </h2>
                  {/* phone and email */}
                  <div className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="fill-slate-100"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                    </svg>
                    <span className="text-slate-100">{number}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      className="fill-slate-100"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                    </svg>
                    <span className="text-slate-100">{email}</span>
                  </div>

                  <div className=""></div>
                  <div className="flex gap-8">
                    <a
                      className="w-12 h-12 group/github flex items-center justify-center"
                      href={email}
                      target="_blank"
                    >
                      <svg
                        className="w-12 h-12 fill-slate-300 group-hover/github:fill-slate-100 duration-300"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      className="w-12 h-12 group/linkedin flex items-center justify-center hover:bg-amber-50 rounded-2xl"
                      href={linkedIn}
                      target="_blank"
                    >
                      <svg
                        className="w-12 h-12 fill-slate-300 group-hover/linkedin:fill-blue-400 duration-300"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      className="w-12 h-12 group/whatsapp flex items-center justify-centerrounded-full"
                      href={whatsapp}
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 group/whatsapp flex items-center justify-center fill-slate-100 hover:fill-green-400 rounded-2xl duration-300"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>whatsapp</title>{" "}
                          <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>
                  <form className="space-y-6" action={handleSubmit}>
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">
                        Name
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest rounded-lg text-on-surface px-4 py-3 transition-all"
                        placeholder="John Doe"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">
                        Email
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest rounded-lg text-on-surface px-4 py-3 transition-all"
                        placeholder="john@example.com"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">
                        Message
                      </label>
                      <textarea
                        className="w-full bg-surface-container-lowest rounded-lg text-on-surface px-4 py-3 transition-all"
                        placeholder="Tell me what's on your mind..."
                        rows={4}
                        defaultValue={""}
                        name="message"
                      />
                    </div>
                    <button
                      className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-bold font-headline-lg text-code-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-glow"
                      type="submit"
                    >
                      Send Transmission
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </BorderGlow>
        </AnimatedContent>
      </div>
    </section>
  );
}
