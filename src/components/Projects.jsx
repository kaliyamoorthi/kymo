export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black"
          style={{ WebkitTextStroke: "3px black" }}
        >
          Saas Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="reveal group bg-white border-4 border-black p-4 shadow-hard">
            <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
              {/* <img
                src="/Prepx.png"
                alt="AI Productivity Platform"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              /> */}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  AI Productivity Platform
                </p>
                <h3 className="text-4xl font-black uppercase mb-2 group-hover:text-neo-red transition-colors glitch-hover">
                  Kymo AI Workspace
                </h3>
                <p className="font-mono text-sm mb-2 max-w-sm">
                  An AI-powered productivity platform that combines document management, intelligent search, task automation, and AI assistants to help teams collaborate more efficiently.
                </p>
                <p className="font-mono text-xs font-bold mb-4 text-neo-black">
                  Focus: AI Automation, Knowledge Management, Productivity
                </p>
                <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                  <span className="bg-neo-black text-white px-2 py-1">React</span>
                  <span className="bg-neo-black text-white px-2 py-1">Spring Boot</span>
                  <span className="bg-neo-black text-white px-2 py-1">OpenAI API</span>
                  <span className="bg-neo-black text-white px-2 py-1">PostgreSQL</span>
                  <span className="bg-neo-black text-white px-2 py-1">Redis</span>
                </div>
              </div>
              <a
                href=" "
                className="w-12 h-12 flex-shrink-0 border-2 border-black bg-neo-blue flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm ml-4"
                aria-label="View PrepX Project"
              >
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </a>
            </div>
          </article>

          <article className="reveal group bg-white border-4 border-black p-4 shadow-hard mt-0 md:mt-20">
            <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
              {/* <img
                src="/veronica.png"
                alt="Veronica — Personal AI Assistant"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              /> */}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Learning Management Platform
                </p>
                <h3 className="text-4xl font-black uppercase mb-2 group-hover:text-neo-blue transition-colors glitch-hover">
                  Any Tech
                </h3>
                <p className="font-mono text-sm mb-2 max-w-sm">
                  Built a scalable learning platform with interactive courses, assessments, progress tracking, certificates, and AI-powered personalized learning recommendations.
                </p>
                <p className="font-mono text-xs font-bold mb-4 text-neo-black">
                  Focus: Education Technology, User Experience, Scalability
                </p>
                <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                  <span className="bg-neo-black text-white px-2 py-1">React</span>
                  <span className="bg-neo-black text-white px-2 py-1">Spring Boot</span>
                  <span className="bg-neo-black text-white px-2 py-1">MySQL</span>
                </div>
              </div>
              <a
                href=" "
                className="w-12 h-12 flex-shrink-0 border-2 border-black bg-neo-blue flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm ml-4"
                aria-label="View Veronica Project"
              >
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </a>
            </div>
          </article>

          <article className="reveal group bg-white border-4 border-black p-4 shadow-hard">
            <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
              {/* <img
                src="/PULSE_img.png"
                alt="PULSE — Wearable Emergency Device"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              /> */}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Enterprise Workflow Platform
                </p>
                <h3 className="text-4xl font-black uppercase mb-2 group-hover:text-neo-pink transition-colors glitch-hover">
                  Workflow Automation System
                </h3>
                <p className="font-mono text-sm mb-2 max-w-sm">
                  Built a configurable workflow engine for approvals, task assignments, notifications, and business process automation across departments.
                </p>
                <p className="font-mono text-xs font-bold mb-4 text-neo-black">
                  Focus: Business Automation, Enterprise Software
                </p>
                <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                  <span className="bg-neo-black text-white px-2 py-1">React</span>
                  <span className="bg-neo-black text-white px-2 py-1">Spring Boot</span>
                  <span className="bg-neo-black text-white px-2 py-1">RabbitMQ</span>
                  <span className="bg-neo-black text-white px-2 py-1">MySQL</span>
                </div>
              </div>
              <a
                href=" "
                className="w-12 h-12 flex-shrink-0 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm ml-4"
                aria-label="View Pulse Project"
              >
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </a>
            </div>
          </article>
        </div>

        <div className="text-center mt-24">
          <a
            href=" "
            className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover"
          >
            COMING SOON
          </a>
        </div>
      </div>
    </section>
  );
}
