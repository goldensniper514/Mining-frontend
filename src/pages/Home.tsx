import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ImgPanel from "../components/Home/section3/imgPanel";
import PanelSetup from "../components/panel_setep";
import Description from "../components/Home/section3/description";
import DisplayAmount from "../components/Home/section4/displayAmount";
import Sec4Description from "../components/Home/section4/sec4description";
const Home: React.FC = () => {
  // ------------section2 panelsetup setting-------
  const sec2tile = "ABOUT US"
  const sec2subtitle = "Revolutionizing mining investments through blockchain transparency"
  const sec2contexts = [
    "Over 20 years of experience in mineral exploration, mining and investment through its subsidiary Mineralex (SL) Limited in Sierra Leone.",
    "Mineralex Group aim to revolutionize mineral exploration and extraction through tokenized operations, enabling widespread investor participation and empowering local African communities.",
    "By combining blockchain’s transparency with the tangible backing of real-world assets, Mineralex aims to create secure, accessible, and profitable mining investment opportunities for global investors.",
  ];
  // -----------------section3 setting----
  const sec3Img1 = "./home/sec3_Img1.png";
  const sec3Img2 = "./home/sec3_Img2.png";
  const sec3title = "MINERALEX TOKEN STRATEGY";
  const sec3subtitle = "Own a Share of the Future: Tokenized Gold & Minerals on Blockchain";
  const sec3contexts = [
    "The future of mineral wealth is digital. Mineralex Group is bringing real-world gold and minerals to the blockchain, offering transparent, secure, and decentralized ownership of valuable natural resources. Be part of the next generation of asset-backed investments.",
    "Mineralex Group is revolutionizing mineral ownership by tokenizing real-world assets such as gold and other valuable minerals. Our platform allows anyone, anywhere, to participate in the value appreciation of these assets, creating a secure, transparent, and accessible investment model.",
  ];
  const sec3description1_1_img = "./home/sec3_description1_1_img.png";
  const sec3description1_1_contexts = "Utility Token to fund feasibility studies, infrastructure for early-stage operations, RWA creation, ecosystem, legal and licensing requirements and community engagement.";
  const sec3description1_2_img = "./home/sec3_description1_2_img.png";
  const sec3imgsize_1 = "120px";
  const sec3imgsize_2 = "40px";
  const sec3description1_2_contexts = "RWA Token to fund mining operations, gold-backed investments, and mergers & acquisitions (M&A). Offering stable, asset-backed investments which represents ownership stakes and provides dividends.";
  const sec3description2_img = "./home/sec3_description2_img.png";
  const sec3description2_1_contexts = "Offers Token Stability and Value Growth.";
  const sec3description2_2_contexts = "Lowering Investment Barriers, Introducing Flexible Investments and Enabling Fractional Ownership of Mineral Assets.";
  const sec3description2_3_contexts = "Implementing fair profit-sharing.";
  const sec3description2_4_contexts = "Bringing transparency to mineral resource investments.";
  // ------------------section4 setting-------------
  const sec4imgsize = "75px";
  // -------------------section6 setting---------------
  const sec6title = "Community approach";
  const sec6subtitle = "Together, fair and transparent";
  const sec6contexts = [
    "Mineralex (SL)'s ownership structure is uniquely designed to align the interests of local communities with the company's growth objectives.",
    "Mineralex prioritizes strong relationships with local communities , recognizing that responsible mining includes making a positive, sustainable impact on the regions it operates.",
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white box-border overflow-x-hidden">
      {/* ------------section1----------- */}
      <div className="contain h-auto xl:h-[100vh]  bg-[url('../public/home/section1.svg')]  bg-black/30  bg-blend-overlay  bg-cover bg-center w-full flex flex-col items-center justify-center gap-[33px] px-4 py-40 lg:py-60 transition-all duration-500">
        <div className="flex flex-col items-center justify-center gap-[30px] text-center text-[#000000] text-4xl md:text-5xl   lg:text-[60px] font-bungeeinline font-normal leading-[38.34px] ">
          <div className="text-white">BRIDGING MINING AND</div>
          <div className="text-[#F8D835]"> BLOCKCHAIN TECHNOLOGY</div>
        </div>
        <div className="wrap-text text-white text-[20px] font-montserrat font-[500] text-center leading-[20px] mt-[8px] mb-[18px]">
          Tokenizing Mineral Reserves for Transparency and Global Access.
        </div>

        <div className="flex flex-row gap-7 sm:gap-20">

          <button className="min-w-[123px] min-h-[32.8px] bg-[#F8D835] font-montserrat text-black text-[14px] px-2 py-1 sm:text-[20px] md:text-[24px] lg:text-[29px] sm:px-10 md:px-15 lg:px-20 lg:py-10 rounded-3xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            <div className="flex flex-row gap-1 justify-center items-center font-bold">
              LEARN MORE
            </div>
          </button>

          <button className="min-w-[123px] min-h-[32.8px] bg-transparent font-montserrat text-[#F8D835] text-[14px] px-2 py-1 sm:text-[20px] lg:text-[29px] sm:px-10 lg:px-20 lg:py-10 rounded-3xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            <div className="flex flex-row gap-1 justify-center items-center font-bold">
              INVEST NOW
              <FaArrowRight className="text-[#F8D835]" />
            </div>
          </button>
        </div>

      </div>

      {/* ------------------------------------section2------------------------------------------- */}

      <div className="contain w-full h-auto  bg-[url('../public/home/section2.svg')] bg-cover bg-center flex flex-col items-center justify-center lg:items-start gap-[33px] px-4 lg:px-10 py-6  md:py-20 lg:py-40 xl:py-60 transition-all duration-500">
        <div className="w-full max-w-[600px] ">
          <PanelSetup title={sec2tile} subtitle={sec2subtitle} contexts={sec2contexts} />
        </div>

      </div>

      {/* -----------------------section3---------------------- */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col  lg:flex-row justify-around items-center gap-10 sm:gap-[26px] p-4 lg:p-10">
          <div className="contain h-auto flex flex-col sm:flex-row items-center justify-center sm:gap-[40px] transition-all duration-500">
            <ImgPanel source={sec3Img1} />
            <div className="pt-20">
              <ImgPanel source={sec3Img2} />

            </div>

          </div>
          <div className="w-full max-w-[600px] ">
            <PanelSetup title={sec3title} subtitle={sec3subtitle} contexts={sec3contexts} />
          </div>
        </div>

        <div className="w-full flex flex-col  lg:flex-row justify-center items-center gap-10 sm:gap-[60px] lg:gap-[120px] px-4 sm:px-10 lg:px-[80px] lg:pb-[100px]">
          <div className="flex-1 flex flex-col gap-10 justify-center items-center ">
            <div className="font-bold text-[#F8D835] text-center lg:text-left font-bungeeinline text-[30px] uppercase ">
              Dual Token Strategy - Two-Phase Approach
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-8">
              <Description imgsource={sec3description1_1_img} imgsize={sec3imgsize_1} contexts={sec3description1_1_contexts} />
              <Description imgsource={sec3description1_2_img} imgsize={sec3imgsize_1} contexts={sec3description1_2_contexts} />
            </div>
          </div>

          <div className="flex-1 flex-col items-center justify-center">
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <Description imgsource={sec3description2_img} imgsize={sec3imgsize_2} contexts={sec3description2_1_contexts} />
              <Description imgsource={sec3description2_img} imgsize={sec3imgsize_2} contexts={sec3description2_2_contexts} />
              <Description imgsource={sec3description2_img} imgsize={sec3imgsize_2} contexts={sec3description2_3_contexts} />
              <Description imgsource={sec3description2_img} imgsize={sec3imgsize_2} contexts={sec3description2_4_contexts} />
            </div>


            <button className="float-right min-w-[123px] min-h-[32.8px] bg-[#172B6B] font-montserrat text-white text-[20px] md:text-[24px] lg:text-[29px] px-6 py-2 md:px-10 my-8 rounded-2xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
              <div className="flex flex-row gap-1 justify-center items-center font-bold">
                LEARN MORE
              </div>
            </button>

          </div>
        </div>
      </div>


      {/* ------------------------section4----------------------------*/}
      <div className="w-full flex flex-col justify-center items-center bg-[#172B6B]  bg-[url('../public/home/section4.svg')] bg-cover bg-center  py-8  ">
        <div className="contain w-full h-auto flex flex-col lg:flex-row items-center justify-around gap-6 lg:gap-20 px-4 lg:px-10 xl:pl-40 transition-all duration-500">
          <div className="w-full h-auto lg:w-2/5 flex flex-col justify-center items-center p-6 sm:p-10 gap-10">
            <div className="border-l-2 border-[#F8D835] px-1 md:px-2 text-center text-[#F8D835] font-normal text-[20px] sm:text-[24px] font-bungeeinline">
              EXPLORATION HIGHLIGHTSF
            </div>

            <div className="w-full flex flex-row justify-between items-start gap-4">
              <DisplayAmount value="+$10B" explanation="Bedrock Inferred Deposits Value" />
              <DisplayAmount value="+$20M" explanation="Invested in Exploration " />
            </div>

            <div className="w-full grid grid-cols-5 gap-4">
              <div className="col-span-2 col-start-1">
                <Sec4Description imgsource="./home/sec4_1.svg" imgsize={sec4imgsize} contexts="15,000 samples" fontColor="white" />
              </div>
              <div className="col-span-2 col-start-4">
                <Sec4Description imgsource="./home/sec4_2.svg" imgsize={sec4imgsize} contexts="190 pits" fontColor="white" />
              </div>

              <div className="col-span-2 col-start-1">
                <Sec4Description imgsource="./home/sec4_3.svg" imgsize={sec4imgsize} contexts="Ultra Ground Penetrating Radar" fontColor="white" />
              </div>
              <div className="col-span-2 col-start-4">
                <Sec4Description imgsource="./home/sec4_4.svg" imgsize={sec4imgsize} contexts="15 trenches" fontColor="white" />
              </div>

              <div className="col-span-2 col-start-1">
                <Sec4Description imgsource="./home/sec4_5.svg" imgsize={sec4imgsize} contexts="High-Resolution Induced Polarization" fontColor="white" />
              </div>
              <div className="col-span-2 col-start-4">
                <Sec4Description imgsource="./home/sec4_6.svg" imgsize={sec4imgsize} contexts="12 drill holes" fontColor="white" />
              </div>
              <div className="col-span-3 col-start-2">
                <Sec4Description imgsource="./home/sec4_7.svg" imgsize={sec4imgsize} contexts="+30 trial mining" fontColor="white" />
              </div>
            </div>
          </div>

          <div className="w-full h-auto px-4">
            <img src="./home/section4_2.svg" alt="sec4_part2" className="w-full 2xl:w-4/5 h-auto float-right" />
          </div>
        </div>
        <button className="min-w-[123px] min-h-[32.8px] bg-[#F8D835] font-montserrat text-black text-[14px] px-4 py-2 sm:text-[20px] md:text-[24px] lg:text-[29px] sm:px-10 md:px-15 lg:px-20 lg:py-6 rounded-3xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
          <div className="flex flex-row gap-1 justify-center items-center font-bold">
            LEARN MORE
          </div>
        </button>
      </div>

      {/* ----------------------section5----------- */}
      <div className="w-full flex flex-col  lg:flex-row justify-center items-center p-4 lg:p-8 gap-6">
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <div className="flex-1 font-normal text-[#F8D835] font-bungeeinline text-[22px] text-center lg:text-left uppercase flex-wrap ">
            Miner Alex is where mining meets fun, and rewards never stop growing
          </div>

        </div>
        <div className="flex-1 flex flex-col justify-between items-center  px-8">
          <div className="font-bungeeinline font-normal text-[36px] text-center">
            THE GAME
          </div>
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
            <img src="./home/sec5game.svg" alt="sec5game" className="w-auto h-auto" />
          </div>
          <div className="w-full font-normal text-black font-montserrat text-[22px] text-center flex-wrap">
            An exciting adventure in the ultimate clicker game!
            Dig for treasures, mine gold, and build your empire
          </div>
          <button className="min-w-[123px] min-h-[32.8px] bg-[#172B6B] font-montserrat text-white text-[20px] md:text-[24px] lg:text-[29px] px-6 py-2 md:px-10 my-8 rounded-2xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
            <div className="flex flex-row gap-1 justify-center items-center font-bold">
              Play now
            </div>
          </button>

        </div>
      </div>
      {/* ------------------------section6--------------------- */}
      <div className="w-full flex flex-col gap-6 p-6">
        <PanelSetup title={sec6title} subtitle={sec6subtitle} contexts={sec6contexts} />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
          <img src="./home/sec6_1.png" alt="sec6_1" />
          <img src="./home/sec6_2.png" alt="sec6_2" />
          <img src="./home/sec6_3.png" alt="sec6_3" />
          <img src="./home/sec6_4.png" alt="sec6_4" />
          <img src="./home/sec6_5.png" alt="sec6_5" />
          <img src="./home/sec6_6.png" alt="sec6_6" />
        </div>

      </div>
    </div>
  );
};
export default Home;
