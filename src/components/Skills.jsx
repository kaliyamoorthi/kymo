export function Skills() {
  const skills = [
    { tag: ">_ STRATEGY", name: "Product Discovery", c: "hover:bg-white" },
    { tag: ">_ ENGINEERING", name: "Full-Stack Development", c: "hover:bg-neo-yellow" },
    { tag: ">_ INTELLIGENCE", name: "AI/ML Integration", c: "hover:bg-neo-blue" },
    { tag: ">_ DESIGN", name: "UI/UX Systems", c: "hover:bg-white" },
    // // { tag: ">_ STYLING", name: "TAILWIND", c: "hover:bg-neo-pink" },
    { tag: ">_ INFRA", name: "Cloud & DevOps", c: "hover:bg-neo-green" },
    { tag: ">_ GROWTH", name: "Analytics & Experiments", c: "hover:bg-neo-orange" },
    { tag: ">_ QUALITY", name: "QA & Test Automation", c: "hover:bg-neo-blue" },
    { tag: ">_ SUPPORT", name: "Managed Maintenance", c: "hover:bg-neo-purple" },
    // { tag: ">_ FRAMEWORK", name: "DJANGO", c: "hover:bg-neo-yellow" },
    // { tag: ">_ NETWORK", name: "REST APIs", c: "hover:bg-neo-orange" },
    // { tag: ">_ QUERY", name: "GRAPHQL", c: "hover:bg-white" },
    // { tag: ">_ DATA", name: "MySQL", c: "hover:bg-neo-purple" },
    // { tag: ">_ DATA", name: "MONGO DB", c: "hover:bg-neo-green" },
    // { tag: ">_ DATA", name: "SQL", c: "hover:bg-white" },
    // { tag: ">_ VERSION", name: "GIT", c: "hover:bg-white" },
    // { tag: ">_ CLI", name: "BASH", c: "hover:bg-neo-pink" },
    // { tag: ">_ TOOL", name: "VITE", c: "hover:bg-neo-purple" },
    // { tag: ">_ OPS", name: "GitHub", c: "hover:bg-neo-blue" },
    // { tag: ">_ OS", name: "LINUX", c: "hover:bg-neo-green" }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
          
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
            
            SERVICE<span className="text-neo-orange">_STACK</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-green text-sm font-bold">
              WHAT WE DO
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-24 border-r-2 border-b-2 border-white/20 bg-neo-black ${skill.c} transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2`}
            >
              <div className="text-neo-green group-hover:text-black font-serif text-xs mb-1 opacity-50">
                {skill.tag}
              </div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
          <span>TOTAL_SERVICES: 08</span>
          <span>AVAILABILITY: OPEN FOR Q3 PROJECTS</span>
        </div>
      </div>
    </section>


  );
}
