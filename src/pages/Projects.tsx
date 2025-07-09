import { projects, type ProjectType } from "../Data";

const Projects = () => {
  return (
    <main className="main-container pt-30 md:pt-0">
      <div>
        {projects?.map((project: ProjectType, index: number) => {
          return (
            <section
              key={index}
              className={`flex gap-10  my-10 h-[100svh] ${
                index % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              } items-center justify-between`}
            >
              <div className=" basis-2/3 h-full grid place-items-center">
                <img
                  src={project.image}
                  alt="project image"
                  className={`${
                    index % 2 === 0 ? "tilt" : "tilt2"
                  } w-[700px] rounded-xl shadow-xl shadow-black`}
                />
              </div>

              <div className="basis-1/3">
                <h1 className="text-2xl md:text-4xl text-[#E5E5CB] font-extrabold">
                  {project.name}
                </h1>
                <p className="text-lg md:text-2xl text-[#E5E5CB]">
                  {project.description}
                </p>
                <div className="flex gap-2 my-5">
                  {project.stacks?.map((stack: string, index: number) => {
                    return (
                      <span
                        key={index}
                        className="bg-[#E5E5CB] text-[#323232] rounded-lg p-1 border-2 border-black border-b-8 border-r-6"
                      >
                        {stack}
                      </span>
                    );
                  })}
                </div>
                <a href={project.url} target="_blank">
                  <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
                    <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

                    <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>

                    <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                      <span className="select-none">Visit Site</span>

                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
