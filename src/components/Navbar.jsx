import { useState, useEffect } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const navItems = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Products",
      children: [
        { title: "AI", href: "#ai" },
        { title: "SaaS", href: "#saas" },
        { title: "Developer Tools", href: "#developer-tools" },
      ],
    },
    {
      title: "Research",
      children: [
        { title: "AI Research", href: "#research" },
        { title: "Publications", href: "#publications" },
        { title: "Engineering Blog", href: "#blog" },
        { title: "Open Source", href: "#opensource" },
      ],
    },
    {
      title: "Enterprise",
      children: [
        { title: "AI Solutions", href: "#ai-solutions" },
        { title: "SaaS Development", href: "#experience" },
        { title: "Consulting", href: "#consulting" },
      ],
    },
    {
      title: "Company",
      children: [
        { title: "About", href: "#about" },
        { title: "Products", href: "#projects" },
        { title: "Careers", href: "#careers" },
        { title: "Contact", href: "#contact" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="bg-white border-2 border-black px-4 py-2 font-black text-xl shadow-hard hover:bg-black hover:text-white transition-all"
        >
          KL
        </a>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-2 bg-white border-2 border-black p-2 shadow-hard transition-all duration-500 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[150%] opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.children ? (
                <>
                  <button className="px-4 py-2 font-mono font-bold text-sm hover:bg-black hover:text-white transition-all flex items-center gap-1">
                    {item.title}
                    <span className="text-xs">▼</span>
                  </button>

                  {activeMenu === item.title && (
                    <div className="absolute top-full left-0 top-full pt-2 w-64 bg-white border-2 border-black shadow-hard z-50 overflow-hidden">

                      {item.children.map((child) => (
                        <a
                          key={child.title}
                          href={child.href}
                          className="block px-5 py-3 text-sm font-mono border-b last:border-b-0 hover:bg-black hover:text-white transition-colors"
                        >
                          {child.title}
                        </a>
                      ))}

                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="px-4 py-2 font-mono font-bold text-sm hover:bg-black hover:text-white transition-all block"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}


// import { useState, useEffect } from 'react';

// export function Navbar() {
//   const [isVisible, setIsVisible] = useState(true);
//   const navItems = [
//   {
//     title: "Home",
//     href: "#",
//   },
//   {
//     title: "Products",
//     children: [
//       { title: "AI", href: "#ai" },
//       { title: "SaaS", href: "#saas" },
//       { title: "Developer Tools", href: "#developer-tools" },
//     ],
//   },
//   {
//     title: "Research",
//     children: [
//       { title: "AI Research", href: "#research" },
//       { title: "Publications", href: "#publications" },
//       { title: "Engineering Blog", href: "#blog" },
//       { title: "Open Source", href: "#opensource" },
//     ],
//   },
//   {
//     title: "Enterprise",
//     children: [
//       { title: "AI Solutions", href: "#ai-solutions" },
//       { title: "SaaS Development", href: "#saas-development" },
//       { title: "Consulting", href: "#consulting" },
//     ],
//   },
//   {
//     title: "Company",
//     children: [
//       { title: "About", href: "#about" },
//       { title: "Manifesto", href: "#manifesto" },
//       { title: "Careers", href: "#careers" },
//       { title: "Contact", href: "#contact" },
//     ],
//   },
// ];

//   useEffect(() => {
//     const handleScroll = () => {
//       // Hide the navbar when scrolled down more than 50px
//       if (window.scrollY > 50) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     // Initial check
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
    
//     <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
//     <div className="max-w-7xl mx-auto flex justify-between items-center">

//       {/* Logo */}
//       <a
//         href="#"
//         className="bg-black text-white border-2 border-black px-4 py-2 font-black text-xl"
//       >
//         KL
//       </a>

//       {/* Navigation */}
//       <div
//         className={`hidden md:flex items-center gap-2 bg-white border-2 border-black p-2 transition-all duration-500 ${
//           isVisible
//             ? "translate-x-0 opacity-100"
//             : "translate-x-[150%] opacity-0"
//         }`}
//       >
//         {/* navItems here */}
//       </div>

//     </div>
//   </nav>
// );

// }

// old nav bar
// <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
    //   <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-none">
    //     <a
    //       href="#"
    //       className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-orange transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover pointer-events-auto"
    //       aria-label="Home / KYMO LAB Logo"
    //     >
    //       KL
    //     </a>

    //     <div 
    //       className={`hidden md:flex gap-4 bg-white border-2 border-black p-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] origin-top-left ${
    //         isVisible 
    //           ? 'translate-x-0 translate-y-0 rotate-0 skew-x-0 opacity-100 visible shadow-hard' 
    //           : 'translate-x-[150%] translate-y-24 rotate-[45deg] skew-x-[30deg] opacity-0 invisible shadow-none'
    //       }`}
    //     >
    //       <a
    //         href="#about"
    //         className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
    //       >
    //         /ABOUT
    //       </a>
    //       <a
    //         href="#skills"
    //         className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
    //       >
    //         /SERVICE
    //       </a>
    //       <a
    //         href="#experience"
    //         className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
    //       >
    //         /PROCESS
    //       </a>
    //       <a
    //         href="#projects"
    //         className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover"
    //       >
    //         /WORK
    //       </a>
    //       <a
    //         href="#contact"
    //         className="px-3 py-1 font-mono font-bold text-sm bg-gray-400 border border-black hover:bg-neo-pink transition-colors cursor-hover"
    //       >
    //         CONTACT
    //       </a>
    //     </div>
    //   </div>
    // </nav>


