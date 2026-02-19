const links = [
  { text: "Dallas Slab Leak Support", url: "https://dallasplumber.vercel.app" },
  { text: "San Antonio Foundation Experts", url: "https://sanantonioplumbing.vercel.app" },
  { text: "San Francisco Diagnostic Pros", url: "https://plumbersanfranciscoca.vercel.app/" },
  { text: "Charlotte Leak Detection Specialists", url: "https://plumbercharlottenc.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
