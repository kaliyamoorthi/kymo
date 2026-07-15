import { useEffect } from 'react';
import { attachContactFormListener } from '../services/web3forms';

export function Contact() {
  useEffect(() => {
    attachContactFormListener();
  }, []);

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="bg-gray-200 border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
        <div className="absolute -top-10 -left-6 bg-neo-blue border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
          <span className="font-black text-2xl">START A PROJECT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
              Let's<br />Talk
            </h2>
            <p className="font-mono text-lg mb-8 text-gray-600">
              Open to freelance projects and full-time roles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <a
                  href="mailto:developer.moorthi@gmail.com"
                  className="text-xl font-bold hover:bg-neo-blue cursor-hover"
                >
                  developer.moorthi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <span className="text-xl font-bold">Chennai</span>
              </div>
            </div>
          </div>

          <form
            id="contact-form"
            className="space-y-6 bg-gray-50 p-6 border-2 border-black"
          >
            {/* Replace YOUR_ACCESS_KEY_HERE with Web3Forms access key */}
            <input type="hidden" name="access_key" value=" " />

            <div className="flex flex-col">
              <label htmlFor="name" className="font-mono font-bold mb-1 uppercase text-xs">
                Identify yourself…
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="NAME / COMPANY"
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-mono font-bold mb-1 uppercase text-xs">
                Where should I reply?
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="EMAIL ADDRESS"
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-mono font-bold mb-1 uppercase text-xs">
                Describe your mission.
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="PROJECT DETAILS..."
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
            >
              Initiate Transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
