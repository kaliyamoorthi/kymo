export function Reviews() {
  const reviews = [
    {
      id: "REVIEW_001.log",
      color: "neo-green",
      titleClasses: "font-mono text-neo-green text-xs font-bold tracking-widest uppercase",
      bgClass: "bg-neo-green",
      hoverClass: "hover:border-neo-green/50",
      textClass: "text-neo-green/60",
      from: "FROM: Sr. Engineer @ Google",
      quote: `"Vishesh writes the kind of clean, scalable code that would pass our most rigorous technical bars with flying colors."`
    },
    {
      id: "REVIEW_002.log",
      color: "neo-blue",
      titleClasses: "font-mono text-neo-blue text-xs font-bold tracking-widest uppercase",
      bgClass: "bg-neo-blue",
      hoverClass: "hover:border-neo-blue/50",
      textClass: "text-neo-blue/60",
      from: "FROM: CTO @ AlphaTech",
      quote: `"Fast, reliable, and actually has elite taste in system design. A very rare combination in full-stack developers."`
    },
    {
      id: "REVIEW_003.log",
      color: "neo-pink",
      titleClasses: "font-mono text-neo-pink text-xs font-bold tracking-widest uppercase",
      bgClass: "bg-neo-pink",
      hoverClass: "hover:border-neo-pink/50",
      textClass: "text-neo-pink/60",
      from: "FROM: SDE II @ Amazon",
      quote: `"One of the cleanest codebases I have seen. He knows exactly how to handle complex state management and distributed data."`
    },
    {
      id: "REVIEW_004.log",
      color: "neo-purple",
      titleClasses: "font-mono text-neo-purple text-xs font-bold tracking-widest uppercase",
      bgClass: "bg-neo-purple",
      hoverClass: "hover:border-neo-purple/50",
      textClass: "text-neo-purple/60",
      from: "FROM: Staff Engineer @ Meta",
      quote: `"Incredible attention to detail. Vishesh builds user experiences that are as performant as they are visually striking."`
    },
    {
      id: "REVIEW_005.log",
      color: "neo-orange",
      titleClasses: "font-mono text-neo-orange text-xs font-bold tracking-widest uppercase",
      bgClass: "bg-neo-orange",
      hoverClass: "hover:border-neo-orange/50",
      textClass: "text-neo-orange/60",
      from: "FROM: CEO @ DataFlow AI",
      quote: `"Shipped our entire MVP in record time. Excellent command over React and AI integrations. Absolutely flawless delivery."`
    }
  ];

  const renderCards = () => {
    return reviews.map((r, index) => (
      <div
        key={r.id + index}
        className={`flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${r.hoverClass} hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal`}
      >
        <div className={`absolute top-0 left-0 w-full h-1 ${r.bgClass}`}></div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45"></div>
        <div className="flex justify-between items-start mb-6">
          <div className={r.titleClasses}>
            {r.id}
          </div>
          <div className="text-[10px] font-mono text-gray-500">2026.txt</div>
        </div>
        <div className="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">
          {r.from}
        </div>
        <p className="font-bold text-xl leading-snug mb-6 text-white/90">
          {r.quote}
        </p>
        <div className={`flex ${r.textClass} gap-1 text-lg`}>
          <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="reports"
      className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full border border-black"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full border border-black"></div>
          </div>
          <h2 className="font-mono text-white text-xl font-bold ml-4 tracking-tighter">
            CODE_REVIEWS.txt
          </h2>
        </div>
      </div>

      <div className="marquee-container group cursor-hover">
        <div className="marquee-content flex gap-8 py-12 px-4 select-none">
          {renderCards()}
          {renderCards()}
        </div>
      </div>
    </section>
  );
}
