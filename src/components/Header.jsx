const Header = () => {
  return (
    <header className="bg-white text-black py-4 px-10 flex items-center justify-between shadow-lg w-full rounded-b-xl">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-4">
        {/* MM Logo - Curved Rectangle Instead of a Circle */}
        <div className="w-20 h-12 border-4 border-orange-500 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-orange-500 text-2xl font-bold">MM</span>
        </div>
      </div>

      {/* Center Navigation - Improved Alignment */}
      <nav className="flex space-x-10 font-semibold text-lg tracking-wide">
        <a
          href="#about"
          className="hover:text-orange-500 transition duration-300"
        >
          ABOUT
        </a>
        <a
          href="#project"
          className="hover:text-orange-500 transition duration-300"
        >
          PROJECTS
        </a>
        <a
          href="#contacts"
          className="hover:text-orange-500 transition duration-300"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
