import { motion } from "framer-motion";

const items = [
  "Product-Market Fit",
  "Site Experience",
  "Acquisition",
  "Lifecycle & Retention",
  "Reporting & Analytics",
];

export default function Circles() {
  return (
    <div className="relative w-full my-24">
      
       <div className="relative z-10 px-6 pt-32 pb-24 mx-auto text-center max-w-4xl">
        <h2 className="mb-8 text-2xl md:text-5xl font-light uppercase tracking-wide text-[#fafff3]">
          Custom data-driven, perfomance-focused <span className="italic">growth</span> marketing solutions
        </h2>

        <p className="text-[#fafff3] max-w-lg mx-auto">  Custom data-driven, perfomance-focused growth marketing solutions have helped companies of all shapes and sizes to grow faster, regardless of size, industry or revenue model.</p>
      </div>

 
    <div className="relative mx-auto w-full max-w-[700px] aspect-square -translate-y-48">


       {/* Glow */}
        <motion.div
          className="absolute inset-0 z-0 scale-[1.3] rounded-full 
            bg-[#C0F53D]/20 blur-[100px]"
          animate={{ scale: [1.3, 1.4, 1.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />


      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full bg-black rounded-full z-10 flex items-center justify-center"
        style={{ perspective: 800 }}
      >

       <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {items.map((_, i) => {
          const angle = (i / items.length) * Math.PI * 2;

          const r = 25; 

          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;

          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="rgba(192,245,61,0.3)"
              strokeWidth="0.2"
            />
          );
        })}
      </svg>

        {/* Subtle particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#c0f53d] rounded-full opacity-60" />
          
          <div className="absolute top-72 right-1/3 w-2 h-2 bg-[#c0f53d] rounded-full opacity-40" />

          <div className="absolute bottom-1/2 left-40 w-3 h-3 bg-[#c0f53d] rounded-full opacity-40" />
        </div>
        


        {/* Circles */}
        {[1, 0.75, 0.5].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `scale(${scale}) translateZ(${i * 20}px)` }}
          >

            <svg className="w-full h-full p-20">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
                style={{filter: "drop-shadow(0 0 6px rgba(192, 245, 61, 1))",}}
              />
            </svg>
          </motion.div>
        ))}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center text-[#c0f53d] text-center text-2xl w-fit max-w-[10rem] mx-auto font-medium">
          The 5 Pillars of Growth
        </div>

        {/* Items around circle */}
        {items.map((text, i) => {
          const angle = (i / items.length) * Math.PI * 2;
          const radius = 180;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute text-[#c0f53d] text-sm"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{text}</span>
              </div>
            </motion.div>
          );
        })}

        
      </motion.div>

      
    </div>
    </div>
  );
}