import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-background md:backdrop-blur-lg fixed z-[1000] w-full top-0">
      <div className="flex items-center justify-between py-5   container">
        <a href="#">LOGO</a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
