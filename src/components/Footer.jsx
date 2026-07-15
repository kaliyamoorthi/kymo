export function Footer() {
  return (
    <footer className="bg-black text-white px-4 md:px-12 pt-16 pb-8 border-t-8 border-neo-green font-mono relative overflow-hidden min-h-[100svh] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          {/* <h2 className="text-4xl font-black mb-6">Vishesh Jha</h2> */}
          <div className="inline-block border-2 border-white bg-black p-4 shadow-[4px_4px_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_rgba(51,255,87,1)] transition-all mb-4">
            <p className="font-bold text-white uppercase tracking-widest leading-relaxed text-sm">
              <span className="text-neo-pink">No noise.</span> Just build.<br />
              <span className="text-neo-blue">Think.</span> <span className="text-neo-green">Build.</span> <span className="text-neo-orange">Ship.</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            SITEMAP
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white hover:underline decoration-neo-yellow decoration-2 cursor-hover"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white hover:underline decoration-neo-blue decoration-2 cursor-hover"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white hover:underline decoration-neo-green decoration-2 cursor-hover"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            SOCIALS
          </h3>
          <div className="flex gap-4">
            <a
              href=" "
              className="text-2xl hover:text-neo-blue transition-colors cursor-hover"
              aria-label="LeetCode Profile"
            >
              <i className="ri-code-fill"></i>
            </a>
            <a
              href=" "
              className="text-2xl hover:text-neo-pink transition-colors cursor-hover"
              aria-label="Instagram Profile"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href=" "
              className="text-2xl hover:text-neo-yellow transition-colors cursor-hover"
              aria-label="GitHub Profile"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href=" "
              className="text-2xl hover:text-neo-purple transition-colors cursor-hover"
              aria-label="LinkedIn Profile"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 mt-auto">
        <div className="w-full flex justify-between items-baseline">
          <div className="text-[16vw] font-black text-neo-white tracking-tighter leading-none mb-4 -ml-2 select-none">
            KYMO LABS
          </div>
          <div className="w-[3vw] h-[3vw] bg-white rounded-full mb-[2vw]"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-t border-neo-green pt-6 text-sm font-bold text-gray-400 font-mono gap-4 w-full">
          <p>KYMO LABS ©2026 - Privacy Policy</p>
          <p>CHENNAI</p>
        </div>
      </div>
    </footer>
  );
}
