const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-6 flex items-center justify-between border-b shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-4">
        <div className="w-20 h-10 bg-gray-300 flex items-center justify-center">
          <span className="text-black font-semibold"></span>
        </div>

        {/* "On Air" Show Name */}
        <div className="flex items-center space-x-2">
          <span className="bg-orange-600 text-white px-2 py-1 text-xs font-bold rounded-md">
            O
          </span>
          <span className="font-semibold"></span>
        </div>
      </div>

      {/* Center Navigation - Always Visible */}
      <nav className="flex space-x-6 font-bold">
        <a href="#about" className="hover:text-gray-600">
          ABOUT
        </a>
        <a href="#projects" className="hover:text-gray-600">
          PROJECTS
        </a>
        <a href="#contact" className="hover:text-gray-600">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
