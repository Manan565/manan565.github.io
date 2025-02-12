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
    <div className="pl-5">
      <div className="flex items-center pb-0 mb-0 pt-20">
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
      {/* Adjust spacing of Buttonres */}
      <div className="mt-5">
        <Buttonres />
      </div>
    </div>
  );
};

export default Card;
