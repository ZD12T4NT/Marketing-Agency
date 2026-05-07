import { motion } from "framer-motion";
import Alien from "../../public/alienSVG.svg"


export default function Alien() {
  return (
    <div className="relative w-full h-full">
           {/* TOP DARK STRIP */}
      <div className="h-40 bg-black relative">
        <Alien />
      </div>
     
    </div>
  );
}