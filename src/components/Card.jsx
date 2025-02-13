import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Buttonres from "./Buttonres";

const Card = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Manan", "a Web Developer", "a Software Engineer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-16 pt-20">
      {/* Left Section: Card + Buttons */}
      <div className="flex flex-col items-start space-y-8">
        {/* Main Card */}
        <div className="relative">
          <div className="h-[20em] w-[35em] bg-white rounded-[2em] overflow-hidden relative group p-6 z-0 text-left shadow-2xl">
            {/* Expanding Circle Effect */}
            <div className="circle absolute h-[10em] w-[10em] -top-[5em] -right-[5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1]" />

            {/* More Info Button */}
            <button className="text-[1.5em] absolute bottom-[2em] left-[2em] text-[#6C3082] group-hover:text-white duration-500">
              <i className="fa-solid fa-arrow-right ml-3 text-2xl" />
            </button>

            {/* Heading Text - Larger Size with Typing Effect */}
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[3.5em] leading-tight">
              Hi! I am <span ref={typedElement} />
            </h1>
          </div>
        </div>

        {/* Buttons Below the Card */}
        <Buttonres />
      </div>

      {/* Right Section: Rotating Mechanical Wheel */}
      <div className="absolute top-[250px] right-[250px]">
        {" "}
        {/* Adjust right value */}
        <svg
          className="animate-spin w-[100px] h-[100px]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FF5800"
        >
          <g transform="translate(50,50)">
            <path d="M-10-50 L10-50 L15-35 L30-30 L35-15 L50-10 L50 10 L35 15 L30 30 L15 35 L10 50 L-10 50 L-15 35 L-30 30 L-35 15 L-50 10 L-50 -10 L-35 -15 L-30 -30 L-15 -35 Z" />
            <circle r="10" fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Card;
