import { instrumentSerif, inter } from "@/lib/fonts";
import TopCurve from "./TopCurve";


export default function CurvedSection() {
  return (
    <section className="relative z-20 bg-[#0a0d04] text-[#fafff3]">
      {/* Curve */}
      <div className="absolute left-0 w-full -translate-y-3/4">
       
      <TopCurve />
       
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-32 pb-24 md:max-w-5xl mx-auto text-center">
        <h2 className={`${inter.className} text-2xl md:text-5xl font-light uppercase tracking-tight`}>
          ADSPACE <span className={`${instrumentSerif.className} italic lowercase`}>is a full-service</span> strategy<span className={`${instrumentSerif.className}`}>,</span> design <span className={`${instrumentSerif.className} italic lowercase`}>and</span> digital marketing agency
          <span className={`${instrumentSerif.className} italic lowercase`}>that helps</span> emerging <span className={`${instrumentSerif.className} italic lowercase`}>and</span> established brands grow <span className="italic">faster</span>.
        </h2>
      </div>
    </section>
  );
}