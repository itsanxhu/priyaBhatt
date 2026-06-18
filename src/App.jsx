import { MapPin, SunMedium, MoonStar, Monitor } from "lucide-react";
import Experience from "./components/Experience";
import { useState } from "react";

const App = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="max-w-4xl min-h-screen mx-auto pt-3">
      {/* Header */}
      <div className="h-18 flex justify-between items-center px-8">
        <div className="flex items-center gap-1">
          <MapPin size={18} className="text-neutral-500/80" />
          <p className="text-neutral-500/80 tracking-tight leading-none text-sm">
            Uttarakhand, India
          </p>
        </div>
        <div className="flex items-center py-1 border px-1 gap-1 border-neutral-500/30 rounded-full">
          <div className="h-6 w-6 rounded-full flex justify-center items-center bg-neutral-400/30">
            <SunMedium size={16} />
          </div>
          <div className="h-6 w-6 rounded-full flex justify-center items-center hover:bg-neutral-400/30">
            <Monitor size={16} strokeWidth={2} className="text-neutral-500" />
          </div>
          <div className="h-6 w-6 rounded-full flex justify-center items-center hover:bg-neutral-400/30">
            <MoonStar size={16} strokeWidth={2} className="text-neutral-500" />
          </div>
        </div>
      </div>
      {/* Middle-part */}
      <div className="h-75 w-full flex justify-center">
        <div className="relative h-80 flex flex-col items-center max-w-md text-center gap-4">
          <div
            className="size-33 flex justify-center items-center cursor-pointer rounded-full border-2 border-dashed border-neutral-500/50 overflow-hidden"
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
          >
            <video
              src="/video.mp4"
              autoPlay
              muted
              loop
              className={`absolute size-30 object-cover rounded-full transition-opacity duration-500 ${
                play ? "opacity-100" : "opacity-0"
              }`}
            />

            <img
              src="/mainImage2.png"
              alt=""
              className={`absolute size-30 object-cover rounded-full transition-opacity duration-500 ${
                play ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="absolute right-10 top-24 cursor-pointer hover:scale-95 active:scale-90 transition-transform duration-200">
            <p className="rounded-full tracking-tight bg-green-400/10 text-green-600/90 border-green-600/40 transition-colors duration-100 px-3 border-2 border-dashed py-1 text-xs flex justify-center items-center gap-1">
              <div className="h-3 w-3 bg-green-300/40 rounded-full flex justify-center items-center">
                <div className="h-1.5 w-1.5 bg-green-400 rounded-full"></div>
              </div>
              Open to Work
            </p>
          </div>
          <div className="absolute left-0 top-10 cursor-pointer hover:scale-95 active:scale-90 transition-transform duration-200">
            <p className="rounded-full tracking-tight text-orange-600/90 bg-orange-400/10 border-orange-600/40 transition-colors duration-100 px-3 border-2 border-dashed py-1 text-xs flex justify-center items-center gap-1">
              <div className="h-3 w-3 bg-orange-300/40 rounded-full flex justify-center items-center">
                <div className="h-1.5 w-1.5 bg-orange-400 rounded-full"></div>
              </div>
              Product Designer
            </p>
          </div>
          <div
            className="gap-2 tracking-tight italic cursor-pointer text-neutral-900"
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
          >
            <p className="namefont text-2xl leading-none">Hey! I'm</p>
            <p className="Heyfont text-4xl leading-none">Priya Bhatt</p>
          </div>
          <p className="text-neutral-500/80 tracking-tight leading-5">
            Currently working at{" "}
            <span className="bg-orange-300/40 text-neutral-700">
              SAY Design Studio
            </span>
            . Once I start something I love, I finish it. love, I finish it.
          </p>
        </div>
      </div>
      <Experience />
    </div>
  );
};

export default App;
