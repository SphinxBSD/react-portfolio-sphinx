import { curve, heroBackground } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useEffect, useRef, useState } from "react";
import Generating from "./Generating";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const parallaxRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="text-n-2 relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Building Digital Solutions, {` `}
            <span className="inline-block relative">
              That Matter{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 text-gray-200 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Hi, I&apos;m Augusto — a Full Stack Developer
          </p>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto mb-8 text-gray-300 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }"
          >
            With expertise in both frontend and backend technologies, I focus on
            crafting seamless, efficient, and impactful digital solutions.
          </p>
        </div>
        <div className="relative max-w-[25rem] mx-auto md:max-w-5xl xl:mb-28">
  {/* Outer glowing frame */}
  <div className="relative z-20 rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_-5px_rgba(139,92,246,0.4)]">
    <div className="relative bg-n-8/95 backdrop-blur-sm rounded-[1rem] overflow-hidden shadow-lg">
      {/* Top bar / header strip */}
      <div className="h-[1.3rem] bg-n-10/80 rounded-t-[1rem]" />

      {/* Main content area */}
      <div className="relative aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490]">
        {/* Social Links Form (main interactive element) */}
        <div className="relative z-30 flex justify-center items-center h-full p-6 md:p-10">
          <SocialLinks />
        </div>

        {/* Floating “Generating” animation */}
        <Generating
          className="absolute left-1/2 bottom-6 md:bottom-10 md:w-[31rem] -translate-x-1/2 z-10 pointer-events-none opacity-90"
        />
      </div>
    </div>

    {/* Soft inner gradient glow */}
    <Gradient className="pointer-events-none opacity-70" />
  </div>

  {/* Background image with depth fade */}
  <div className="absolute inset-0 flex justify-center pointer-events-none -z-10">
    <img
      src={heroBackground}
      className="w-full max-w-[1400px] opacity-60 blur-sm scale-110"
      width={1440}
      height={1800}
      alt="hero background"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-n-8 via-transparent to-transparent" />
  </div>

  {/* Background animated circles */}
  <BackgroundCircles className="pointer-events-none opacity-80 blur-[2px]" />
</div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
