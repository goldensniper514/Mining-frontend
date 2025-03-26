import { BsList } from "react-icons/bs";
import { Hamburger } from "./hamburger/Hamburger";

const Navbar: React.FC = () => {
  const hamburgerClick = () => {

  }
  return (
    // <div className="bg-[#FFD042] shadow-[#00000026] w-full h-[104px] md:h-[180px] flex flex-row justify-between items-center pt-[8px] pl-[26px] pr-[30px] md:px-[110px] lg-[220px] ">
    //   <div className="w-[49px] h-[49px] md:w-[99px] md:h-[99px]">
    //     <img src="./logo.png" alt="logo" className="w-auto" />
    //   </div>

    //   <div className="hidden w-full md:text-xs lg:text-lg md:flex justify-around items-center">
    //     <a href="#" className="text-black bg-inherit hover:text-gray-400">
    //       Home
    //     </a>
    //     <a href="#" className="text-blackbg-inherit hover:text-gray-400">
    //       Title 1
    //     </a>
    //     <a href="#" className="text-black bg-inherit hover:text-gray-400">
    //       Title 2
    //     </a>
    //     <a href="#" className="text-black bg-inherit hover:text-gray-400">
    //       Pricing
    //     </a>
    //   </div>

    //   <div className="flex justify-between items-center">
    //     <button className="text-white text-xs px-2 py-1 md:text-base md:px-4 md:py-2 bg-black rounded-md focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#C0FF00] truncate">
    //       Buy Now
    //     </button>
    //   </div>

    //   <div className="w-[35px] h-[35px] hover:cursor-pointer md:hidden">
    //     <BsList className="text-black font-bold w-full h-full" />
    //   </div>
    // </div>
    <div className="relative w-full h-0 bg-red-600 m-auto">
      
      <img src="./vector.png" alt="vector" className="w-[50%] h-auto absolute left-0 z-10 hidden lg:block"/>
      
      <div className="w-full flex justify-between lg:justify-start gap-5 items-center pt-[10px] sm:pt-[20px] md:pt-[35px] absolute left-0">
         <Hamburger onClick={hamburgerClick} />
         <div className="w-[100px] sm:w-[140px] xl:w-[178px] xl:h-[99px] 2xl:w-[301px] 2xl:h-[142px] z-10 transition-all duration-100">
          <img src="./logo.png" alt="logo" className="w-auto h-auto" />
         </div>

      </div>
    </div>
  );
};

export default Navbar;
