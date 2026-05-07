import clsx from "clsx";

type HeroVideoProps = {
  src: string;
  children?: React.ReactNode;
  className?: string;
};

export default function HeroVideo({
  src,
  children,
  className,
}: HeroVideoProps) {
  return (
    <div className={clsx("relative w-full h-[60vh] md:h-[100vh]", className)}>
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional dark tint) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        {children}
      </div>
    </div>
  );
}