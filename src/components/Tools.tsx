const Tools = () => {
  return (
    <section className="w-full text-white grid place-items-center px-4">
      <div className="w-full lg:w-auto">
        <h1 className="text-3xl font-semibold">Technologies I use</h1>
        <div className="flex flex-col lg:flex-row gap-5 mt-5">
          <div className="w-full lg:w-[230px] h-[300px] glass rounded-lg p-5">
            <h1 className="text-xl font-bold">Front-End</h1>

            <ul className=" list-disc m-5">
              <li className="marker:text-purple-500">React & Next JS</li>
              <li className="marker:text-purple-500">TypeScript</li>
              <li className="marker:text-purple-500">Tailwind</li>
              <li className="marker:text-purple-500">Redux Toolkit</li>
            </ul>
          </div>

          <div className="w-full lg:w-[230px] h-[300px] glass rounded-lg p-5">
            <h1 className="text-xl font-bold">Back-End</h1>

            <ul className=" list-disc m-5">
              <li className="marker:text-purple-500">NodeJs</li>
              <li className="marker:text-purple-500">MongoDb</li>
              <li className="marker:text-purple-500">PostgreSQL</li>
              <li className="marker:text-purple-500">ExpressJs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
