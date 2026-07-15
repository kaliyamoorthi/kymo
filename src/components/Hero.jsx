export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black bg-blue-600">
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-green rounded-full border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-rose-600 rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse"></div>
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">
        KL
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-[10vw] md:text-[9vw] leading-tight md:leading-[0.8] font-black uppercase tracking-tighter mb-8 md:mb-6 reveal mix-blend-darken">
         FROM  <span
            className="text-white"
            style={{ WebkitTextStroke: "min(2px, 0.5vw) black" }}
          >
            Ideas 
          </span>
          
        </h1>
         <h1 className="text-[10vw] md:text-[9vw] leading-tight md:leading-[0.8] font-black uppercase tracking-tighter mb-8 md:mb-6 reveal mix-blend-darken">
         to <span
            className="text-white"
            style={{ WebkitTextStroke: "min(2px, 0.5vw) black" }}
          >
            Intelligent
          </span>
          
        </h1>
        
         <h1 className="text-[10vw] md:text-[9vw] leading-tight md:leading-[0.8] font-black uppercase tracking-tighter mb-8 md:mb-6 reveal mix-blend-darken">
          Products<span
            className="text-white"
            style={{ WebkitTextStroke: "min(2px, 0.5vw) black" }}
          >.
          </span>
          
        </h1>

        <p className="font-serif text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-orange border-2 border-black p-4 shadow-hard reveal rotate-1">
         We build intelligent products that solve   
          <span className="bg-neo-black text-neo-white px-2 py-1 border border-black mx-1 inline-block my-1 sm:my-0 shadow-[2px_2px_0_#000]">
              real-world problems
            </span>From AI to SaaS, we create technology that empowers businesses and people to work smarter, grow faster, and achieve more.<br />
          {/* <b>React • Python • Java • Node</b> */}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 reveal">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
           VIEW OUR WORK
          </a>
          <a
            href=""
             className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
          >
            <i className="ri-download-line"></i> DOWNLOAD DECK
          </a>
        </div>
      </div>
    </section>
  );
}
