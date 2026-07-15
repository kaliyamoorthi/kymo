export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-black bg-cyan-500 overflow-hidden w-full box-border"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 w-full">
        <div className="lg:col-span-7 flex flex-col justify-center reveal">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase mb-6 leading-none break-words">Who WE ARE <br/> 
           <span
            className="text-white"
            style={{ WebkitTextStroke: "min(2px, 0.5vw) black" }}
          >
           OUR_STORY 
          </span></h2>
          <p className="font-serif text-base sm:text-lg md:text-2xl leading-relaxed mb-6 bg-neo-orange border-2 border-black p-4 md:p-6 shadow-hard text-justify sm:text-left">
            We believe the future belongs to companies that build exceptional products.That's why<span className="bg-neo-black text-neo-white px-2 py-1 border border-black mx-1 inline-block my-1 sm:my-0 shadow-[2px_2px_0_#000]">
            KL creates AI and SaaS
            </span>
           platforms designed to solve meaningful problems, simplify complexity, and create lasting value.
          </p>
          <div
            className="font-serif text-sm sm:text-base md:text-lg mb-8 text-black border-4 border-black p-4 md:p-6 bg-neo-white relative shadow-hard hover:shadow-hard-xl transition-all"
          >
            <div className="absolute -top-3 -left-3 bg-neo-blue border-2 border-black w-6 h-6 rotate-95"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Building AI-Powered Products & Scalable SaaS Solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Engineering Intelligent Software for Businesses & People</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-neo-purple mt-0.5 md:mt-1 flex-shrink-0 text-lg"></i>
                <span className="flex-1 leading-snug">Driven by Innovation. Focused on Execution..</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 md:gap-6 flex-col sm:flex-row flex-wrap w-full">
            <div
              className="bg-neo-black text-white px-4 md:px-6 py-3 font-mono text-xs sm:text-sm border-2 border-transparent w-full sm:flex-1 shadow-[4px_4px_0_rgba(0,0,0,0.2)] md:shadow-[8px_8px_0_rgba(0,0,0,0.2)] text-center flex items-center justify-center min-h-[50px] whitespace-nowrap overflow-hidden text-ellipsis"
            >
              📍 LOCATION: CHENNAI
            </div>
            <a href="#projects" className="bg-gray-400 text-black px-4 md:px-6 py-3 font-mono font-bold text-xs sm:text-sm border-2 border-black w-full sm:flex-1 shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-transform cursor-hover uppercase text-center flex items-center justify-center min-h-[50px]">
              VIEW OUR SERVICE
            </a>
          </div>
        </div>

        {/* Using a pr and pb wrapper so the absolute shadow element doesn't bleed out of bounds on tiny screens */}
        <div className="lg:col-span-5 flex flex-col justify-center reveal relative mt-6 lg:mt-0 w-full pr-2 pb-2 md:pr-4 md:pb-4 mx-auto max-w-[500px] lg:max-w-full">
          <div className="absolute top-2 left-2 right-0 bottom-0 md:top-4 md:left-4 bg-neo-blue border-4 border-black"></div>
          <div className="bg-white border-4 border-black p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between relative z-10 w-full group overflow-hidden">
            
            <div>
              <div className="flex items-center gap-2 mb-6 md:mb-8 border-b-4 border-black pb-4 overflow-hidden">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm bg-neo-red border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm bg-neo-yellow border-2 border-black flex-shrink-0"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-sm bg-neo-green border-2 border-black flex-shrink-0"></div>
                <span className="ml-2 md:ml-4 font-mono font-bold text-xs sm:text-sm truncate">manifesto.txt</span>
              </div>
              
              <div className="space-y-4 md:space-y-6 font-mono text-sm sm:text-base md:text-lg font-bold">
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">We build products that matter.</span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-blue ml-2">95%</span> */}
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Technology should solve real problems.</span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-pink ml-2">88%</span> */}
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Simple by design.
                   Intelligent by default.</span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-orange ml-2">80%</span> */}
                </div>
                 <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base"> Build for the long term.
                   </span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-orange ml-2">80%</span> */}
                </div>
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base"> Always earn trust.
                   </span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-orange ml-2">80%</span> */}
                </div>
                
                <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-1 group-hover:border-black transition-colors w-full">
                  <span className="text-gray-500 group-hover:text-black uppercase text-xs sm:text-sm md:text-base">Ship fast Improve continuously.</span>
                  {/* <span className="text-xl sm:text-2xl md:text-3xl text-neo-purple ml-2">92%</span> */}
                </div>
                
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-4 border-t-4 border-black overflow-hidden relative">
              <div className="w-full h-6 sm:h-8 flex items-center marquee-container pt-1">
                <div className="marquee-content font-black uppercase text-sm sm:text-lg md:text-xl text-neo-red tracking-widest leading-none block whitespace-nowrap m-0">
                  <span> BUILD /// SHIP /// LEARN /// REPEAT /// STAY CURIOUS /// STAY HUMBLE /// SOLVE REAL PROBLEMS /// CREATE &nbsp;</span>
                  {/* <span>ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING /// ALWAYS LEARNING /// ALWAYS BUILDING /// ALWAYS ITERATING</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Create lasting impact.