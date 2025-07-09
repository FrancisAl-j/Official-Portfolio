import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Model from "../components/Model";
import Tools from "../components/Tools";
import { Link } from "react-router-dom";
import Stacks from "../components/Stacks";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll Animations

  useEffect(() => {
    if (!sceneRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // animation starts when second section hits center
          end: "bottom bottom", // control how long the animation scrolls
          scrub: 1,
        },
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "0vw",
        y: "0svh",
      })
      .to(sceneRef.current, {
        ease: "none",
        x: "25vw",
        y: "90svh",
      });
  }, []);

  return (
    <div ref={containerRef}>
      <main className="main-container h-[100svh] flex flex-col-reverse lg:flex-row justify-center">
        <section className="w-full h-auto lg:h-full grid place-items-center">
          <div className="text-white w-full lg:max-w-[500px] flex flex-col gap-5">
            <div className="glass rounded-4xl self-start py-2 px-7 flex items-center gap-5 z-[-10px]">
              <div className="h-4 w-4 bg-green-600 rounded-full"></div>
              <p>Open to Work</p>
            </div>
            <h1 className="text-2xl lg:text-5xl font-bold">
              Hi, I am Francis Al-j
            </h1>
            <h2 className="text-xl lg:text-4xl font-semibold">
              <span className="text-purple-600 font-bold">
                <TypeAnimation
                  sequence={[
                    "Web Developer!", // Types
                    1000, // Waits 1s
                    "MERN Developer!",
                    1000,
                    "Front-End Developer!",
                    1000,
                    "Back-End Developer!",
                    1000,
                    "Full-Stack Developer!",
                    1000,
                    "Quality Assurance!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className="text-xl lg:text-2xl">
              I am a Web Developer specializing in the MERN Stack. I build fast,
              responsive, and full-featured web applications that solve
              real-world problems.
            </p>
          </div>
        </section>

        <section className="h-[50svh] lg:h-[80svh]  w-full">
          <Scene />
        </section>
      </main>

      <main className="h-[100svh] flex">
        {!isMobile && (
          <div ref={sceneRef} className="w-full relative z-40 hidden lg:block">
            <Canvas>
              <Model />
            </Canvas>
          </div>
        )}

        <Tools />
      </main>

      <main className="project-container h-[100svh] relative z-0 flex items-end justify-center flex-col lg:flex-row">
        <div className=" absolute top-0 left-0 z-20 bg-black/50 backdrop-blur-sm h-[100svh] w-full"></div>
        {isMobile && (
          <div className="w-full h-[50svh] relative lg:hidden block z-40">
            <Canvas>
              <Model />
            </Canvas>
          </div>
        )}

        <div className="relative z-30 text-white w-full lg:w-[400px] glass p-2 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">First Portfolio</h1>
          <p>Official portfolio that I use to apply for internship</p>
          <div className="flex gap-2">
            <h1 className="bg-black p-1 border-[1px] rounded-lg">ReactJS</h1>
            <h1 className="bg-black p-1 border-[1px] rounded-lg">NodeJS</h1>
            <h1 className="bg-black p-1 border-[1px] rounded-lg">ExpressJS</h1>
            <h1 className="bg-black p-1 border-[1px] rounded-lg">MongoDB</h1>
          </div>

          <div className="w-full flex">
            <button className="cursor-pointer bg-green-600 p-1 w-full">
              <a href="https://francisalj.onrender.com/" target="_blank">
                {" "}
                View Site
              </a>
            </button>

            <Link to="/projects" className="w-full">
              <button className="cursor-pointer w-full underline">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Stacks />
    </div>
  );
};

export default Home;
