import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center">
      <div className="contain w-full bg-[#F9F9F9] flex flex-col items-center sm:items-start  justify-center gap-4 px-[50px] py-[35px]">
        <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[23px] font-subway">QUICK APPROACH</div>
        <div className="font-bold text-[#F8D835] font-subway text-[27px] sm:text-[42px]">A QUICK LINKS</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Token Details Preview
            <FaArrowRight className="" />
          </a>

          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Exploration Highlights
            <FaArrowRight className="" />
          </a>

          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Community Impact
            <FaArrowRight className="" />
          </a>

          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Exploration & Resources
            <FaArrowRight className="" />
          </a>

          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Tokenization Advantage
            <FaArrowRight className="" />
          </a>

          <a href="" className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Token Details Preview
            <FaArrowRight className="" />
          </a>
        </div>

      </div>

      <div className="w-full">
        <img src="./footer.png" alt="footer_bg" className="w-full h-auto" />
      </div>

      <div className="w-full flex flex-col justify-center items-center px-8">

        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 py-6 border-b-2 border-black">
          <div className="max-w-[400px] flex flex-col justify-center items-center p-4">
            <div className="w-[100px] sm:w-[140px] xl:w-[178px] xl:h-[99px] z-10 ">
              <img src="./logo.png" alt="logo" className="w-auto h-auto" />
            </div>

            <div className="wrap-text text-black text-[20px] font-montserrat font-[500] text-center leading-[30px] mt-[20px] mb-[18px]">
            Subscribe News Letter
            </div>

            <a href="" className="w-full flex flex-row justify-around items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            Enter E-Mail Address
              <MdArrowOutward />
            </a>
          </div>
          <div className="w-full max-w-[1000px]  flex flex-col  justify-center lg:justify-between items-center gap-9">
            <div className="w-full flex flex-col sm:flex-row  justify-around items-center sm:items-start gap-2 lg:gap-8  truncate">
              <div className="flex flex-col justify-start items-center lg:items-start gap-2">
                <div className="font-subway text-2xl font-bold py-4 ">QUICK LINKS</div>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Home</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">About</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Tokenomics</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Hightlights</a>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-2 ">
                <div className="font-subway text-2xl font-bold  py-4 ">NEWZ</div>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Blog</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">FAQ</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Press kit</a>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-2">
                <div className="font-subway text-xl sm:text-2xl font-bold  py-4 ">INVESTMENT OPPORTUNITIES</div>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Primary Issuance Platform</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Sec Issuance Platform</a>
                <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Get to Know</a>
              </div>
            </div>

            <div className="w-full lg:w-2/3 lg:float-right grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-2 sm:gap-4 text-center">
              <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Facebook</a>
              <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Instagram</a>
              <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Linkedin</a>
              <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Pinterest</a>
            </div>

          </div>

        </div>

        <div className="w-full flex flex-col justify-center items-center py-4 lg:justify-between lg:flex-row">
          <div className=" text-lg text-black font-montserrat truncate">
            © 2025 Minera Lex right reserved
          </div>

          <div className="flex flex-row justify-end items-center gap-4">
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Terms & Condition</a>
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Privacy Policy</a>
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">Cookie Policy</a>
          </div>
        </div>



      </div>



    </footer>
  );
};

export default Footer;


