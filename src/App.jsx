import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="shadow-2xs  w-full h-11">
        <div className="container relative  mx-auto px-30 flex justify-between mt-5">
          <button className="md:hidden text-3xl text-black focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav
            className={`absolute top-16 left-0 shadow-md w-full bg-zinc-100 p-5 transition duration-700  ease-in-out 
                ${isOpen ? "block" : "hidden"} md:static md:flex md:bg-transparent md:p-0 md:shadow-none`}
          >
            <h1 className="logo mr-10 text-black items-center font-bold text-3xl content-center max-[768px]:pb-5 ">LOGO</h1>
            <ul className="nav-links flex flex-col gap-5 md:flex-row md:gap-0 md:items-center ">
              <li className="mr-4 text-neutral-500 text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 px-3 py-2 rounded-3xl cursor-pointer ">
                <Link to={"/"}>features</Link>
              </li>
              <li className="mr-4 text-neutral-500 text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 px-3 py-2 rounded-3xl cursor-pointer">
                <Link to={"/"}>Company</Link>
              </li>
              <li className="mr-4 text-neutral-500 text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 px-3 py-2 rounded-3xl cursor-pointer">
                <Link to={"/"}>Careers</Link>
              </li>
              <li className="mr-4 text-neutral-500 text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 px-3 py-2 rounded-3xl cursor-pointer">
                <Link to={"/"}> About</Link>
              </li>
            </ul>
          </nav>
          <div className="login flex gap-2">
            <button className="pr-4 text-neutral-500 text-sm hover:bg-orange-500 hover:text-white  transition-all duration-300 px-4 py-1 rounded-md items-center  cursor-pointer">
              <Link to={"/"}>Login</Link>
            </button>
            <button className="border-1 text-neutral-500  border-primary-500 text-primary-500 px-4 py-1 rounded-md items-center hover:bg-orange-500 transition-all duration-300 hover:text-white">
              <Link to={"/"}>Register</Link>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-30 flex justify-between mt-5  max-[885px]:flex-col-reverse max-[886px]:justify-center min-[810px]:items-center">
          <div className="tit mt-25 w-100  items-center ">
            <h1 className="text-6xl font-bold max-[768px]:text-5xl max-[882px]:flex max-[882px]:justify-center">
              Make<br></br> remote work
            </h1>
            <p className="text-neutral-500 text-sm mt-5 max- max-[882px]:flex max-[882px]:justify-center">
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className="border-1 max-[882px]:flex max-[882px]:justify-center max-[882px]:mx-auto  text-neutral-500  border-primary-500 text-primary-500 px-4 py-2 rounded-md items-center hover:bg-orange-500 transition-all duration-300 hover:text-white mt-10">
              <Link to={"/"}>Learn more</Link>
            </button>
            <div className="footer flex gap-8 mt-18 max-[768px]:gap-3 max-[880px]:my-8">
              <img className="w-15 h-6 mr-8 max-[882px]:w-11 max-[882px]:flex max-[882px]:justify-center max-[882px]:mx-auto max-[882px]:items-center" src="/images/client-meet.svg" alt="" />
              <img className="w-15 h-6 mr-8 max-[882px]:w-11 max-[882px]:flex max-[882px]:justify-center max-[882px]:mx-auto max-[882px]:items-center" src="/images/client-maker.svg" alt="" />
              <img
                className="w-15 h-6 mr-8 max-[882px]:w-11 max-[882px]:flex max-[882px]:justify-center max-[882px]:mx-auto max-[882px]:items-center"
                src="/images/client-audiophile.svg"
                alt=""
              />
              <img
                className="w-15 h-6 mr-8 max-[882px]:w-11 max-[882px]:flex max-[882px]:justify-center max-[882px]:mx-auto max-[882px]:items-center "
                src="/images/client-databiz.svg"
                alt=""
              />
            </div>
          </div>
          <div className="image">
            <img className="w-83 mt-5 min-[810px]:w-100 " src="/images/image-hero-desktop.png" alt=" " />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
