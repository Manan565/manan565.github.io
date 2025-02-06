const Card = () => {
  return (
    <div className="h-screen flex items-center pl-5 mt-[-160px] pb-0 mb-0">
      <div className="h-[20em] w-[35em] bg-white rounded-[2em] overflow-hidden relative group p-6 z-0 text-left shadow-2xl">
        {/* Expanding Circle Effect */}
        <div className="circle absolute h-[10em] w-[10em] -top-[5em] -right-[5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1]" />

        {/* More Info Button */}
        <button className="text-[1.5em] absolute bottom-[2em] left-[2em] text-[#6C3082] group-hover:text-white duration-500">
          <span className="relative before:h-[0.25em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
            More Info
          </span>
          <i className="fa-solid fa-arrow-right ml-3 text-2xl" />
        </button>

        {/* Heading Text - Larger Size */}
        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[3.5em] leading-tight">
          Hi! This is Manan
        </h1>
      </div>
    </div>
  );
};

export default Card;
