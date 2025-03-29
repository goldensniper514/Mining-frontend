import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Sec4Description from "../components/exploration/sec4description";

const Exploration: React.FC = () => {
    // ---------sec2setting--------
    const sec2title = "extensive studies by leading geological consultants";
    const sec2subtitle = "comprehensive exploration";
    const sec2contexts = [
        "Advanced geophysical techniques such as Gradient Array and High-Resolution Induced Polarization (HIRIP) surveys, Fire Assay Analysis, Ultra-Ground Penetrating Radar and more were adopted together with Trenching, Pitting, Drilling and Trial Mining. These advanced methods have been instrumental in identifying mineral-rich zones deep within the bedrock, thereby guiding targeted exploration efforts for Gold, Coltan, Rare Earth Elements (REE), Tin, and Diamonds. The utilization of these advanced techniques underscores the company's commitment to employing cutting-edge technology in its exploration endeavors.",
    ];
    //lus

    // -------------sec4setting---------
    const sec4imgsize = "120px";

    return (
        <div className="w-full  flex flex-col items-center justify-center bg-white box-border overflow-x-hidden">
            {/* ------------section1----------- */}
            <div className="h-[600px] w-[100vw]  bg-[url('../public/exploration/section1.svg')] inset-0  bg-black/30  bg-blend-overlay  bg-cover bg-center ">
                <div className="w-full h-full flex flex-col items-center justify-center lg:justify-end lg:items-start p-4 backdrop-blur-sm">
                    <div className="w-full h-auto flex flex-col items-center lg:items-start justify-center gap-[10px] text-center font-bungeeinline font-normal lg:px-20 lg:py-[5%] ">
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-white text-[20px] text-center lg:text-left uppercase">
                            <div className="flex flex-row justify-center items-center">
                                home
                                <RiArrowRightSLine className="font-bold text-[#F8D835]" />
                            </div>

                            <div className="flex-wrap">
                                Sierra Leone exploration project
                            </div>
                        </div>
                        <div className="text-4xl sm:text-6xl text-[#3CCDB3] leading-25 uppercase">
                            Exploration & Results
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------section2-------- */}
            <div className="w-full h-[807px] bg-[url('../public/exploration/section2.svg')] bg-cover bg-center  flex flex-col justify-center items-center md:items-start gap-4 p-4">
                <div className="contain w-full max-w-[720px] h-auto  bg-[url('../public/home/Vector2.png')] bg-cover bg-center  flex flex-col items-start justify-center  gap-4 border-l-[19px] border-[#3CCDB3] pl-[25px] pr-[10px] pt-[35px] z-10 relative">
                    <div className="hidden md:block w-[68x] h-[68px] absolute right-5 top-3">
                        <img src="./exploration/section2panel_img.svg" alt="blue logo" className="w-full h-auto " />
                    </div>
                    <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[20px] font-bungeeinline">{sec2title}</div>
                    <div className="font-bold text-[#3CCDB3] font-bungeeinline text-3xl sm:text-[42px] uppercase ">{sec2subtitle}</div>
                    {sec2contexts.map((context, index) => (
                        <div key={index}>
                            {context}
                        </div>
                    ))}

                    <button className="float-right min-w-[123px] min-h-[32.8px] bg-[#172B6B] font-montserrat text-white text-[16px] md:text-[24px] px-6 py-2 md:px-10 my-8 rounded-2xl border-[2px] border-[#F8D835] focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] max-sm:mb-20 truncate">
                        <div className="flex flex-row gap-1 justify-center items-center font-bold">

                            Download Presentation

                        </div>
                    </button>

                </div>
            </div>

            {/* --------------section3------ */}
            <div className="w-full h-auto bg-[#172B6B] flex flex-col justify-center  items-center p-6 sm:p-10 gap-10">
                <div className="w-full flex flex-row justify-center md:justify-start">
                    <div className="border-l-2 border-[#F8D835] px-1 md:px-2 text-center md:text-left  text-[#F8D835] font-normal text-[20px] sm:text-[36px] font-bungeeinline">
                        WORK DONE HIGHLIGHTS
                    </div>
                </div>

                <div className="w-full h-auto grid grid-rows-4 sm:grid-cols-2 gap-2 lg:gap-x-24 lg:px-24">
                    <Sec4Description imgsource="./exploration/sec4_1.svg" imgsize={sec4imgsize} contexts="Over 10,000 soil samples, 2,200 rock samples and 2,730 stream sediment samples" fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_2.svg" imgsize={sec4imgsize} contexts="Ultra Ground Penetrating Radar (UGPR) - 25-line kilometers" fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_3.svg" imgsize={sec4imgsize} contexts="High-Resolution Induced Polarization - 25-line kilometers" fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_4.svg" imgsize={sec4imgsize} contexts="193 pitsin depth of 1 to 3 meters and 1.5 to 2 meters wide" fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_5.svg" imgsize={sec4imgsize} contexts="15 trenches across 3,262 meters. Width of 1.5 meters and depths of 1.5 to 2 meters" fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_6.svg" imgsize={sec4imgsize} contexts="12 diamond drill holes, 1,799 meters, to depths of up to 250 meters, with hole spacing of 200–300 meters and inclinations of -50˚ to -80˚." fontColor="white" />
                    <Sec4Description imgsource="./exploration/sec4_7.svg" imgsize={sec4imgsize} contexts="23 Bulk sampling and 10 trial mining pits, depths up to 12 meters, excavations of 10x10 meters. Over 5,000 cubic meters of material was processed" fontColor="white" />

                </div>
            </div>


        </div>

    );
};

export default Exploration;