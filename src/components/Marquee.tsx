type MarqueeProps = {
  items: string[];
  speed?: number; // seconds
};

export default function Marquee({ items, speed = 20 }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden mt-12 z-0">
      
      {/* Fade edges (optional but looks better) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0b0f05] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0b0f05] to-transparent z-10" />

      <div
        className="flex w-max gap-10 text-3xl capitalize opacity-50 animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First set */}
        <div className="flex gap-10">
          {items.map((item, i) => (
            <span key={`first-${i}`}>{item}</span>
          ))}
        </div>

        {/* Duplicate set */}
        <div className="flex gap-10">
          {items.map((item, i) => (
            <span key={`second-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}