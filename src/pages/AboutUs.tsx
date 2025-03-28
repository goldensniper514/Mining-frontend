import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import PanelSetup from "../components/panel_setep";
import ProfitDisplay from "../components/aboutUs/profitDisplay";
import History_Panel from "../components/aboutUs/history_panel";
const AboutUs: React.FC = () => {
    // ---------sec2setting--------
    const sec2title = "mineralex GROUP";
    const sec2subtitle = " ABOUT MINERALEX GROUP";
    const sec2contexts = [
        " Mineralex Group specializing in blockchain technology, managing and investing in mineral exploration and mining projects. Mineralex Group poised to leverage over a decade of experience in Sierra Leone's mineral sector through its subsidiary, Mineralex (SL) Limited.",
        "The group's primary objective is to integrate blockchain technology with traditional mining practices, thereby offering global investors accessible, transparent, and flexible investment opportunities in valuable mineral resources.",
        "In response to the escalating global demand for minerals such as gold, coltan, and rare earth metals, Mineralex Group plans to address traditional industry challenges—such as high barriers to entry, unequal profit-sharing mechanisms and lack of transparency—by leveraging blockchain-based tokenization.",
    ];
    // -----------sec3setting-------
    const sec3title = "mineralex (sl) limites";
    const sec3subtitle = "ABOUT MINERALEX (SL)";
    const sec3contexts = [
        "Mineralex (SL) Limited was founded in 2023 as new mineral exploration and mining company operating in Sierra Leone as part of strategic shift of Mineralex Group from a traditional mining entity to blockchain-based mining and tokenization entity. Mineralex (SL) serves as the successor to Avivit Minerals Company, which had been active in the mineral-rich Sella Limba and Sanda Loko Chiefdoms since 2007.",
        "Mineralex (SL) focuses on high-value mineral deposits, including bedrock Gold, Coltan, Rare Earth Elements (REE), Tin and Diamonds.",
        "Mineralex (SL)'s ownership structure is uniquely designed to align the interests of local communities with the company's growth objectives.",
    ];
    return (
        <div className="w-full  flex flex-col items-center justify-center bg-white box-border overflow-x-hidden">
            {/* ------------section1----------- */}
            <div className="contain h-[600px] w-[100vw]  bg-[url('../public/aboutUs/section1.svg')]  bg-black/30  bg-blend-overlay  bg-cover bg-center flex flex-col items-center justify-center lg:justify-end lg:items-start blur-sm ">
                <div className="flex flex-col items-start justify-center gap-[10px] text-center text-[#000000] text-5xl sm:text-6xl font-bungeeinline font-normal leading-[38.34px] lg:px-28 lg:my-16  blur-none">
                    <div className="flex flex-row justify-start items-center text-white text-[20px] uppercase">
                        home
                        <RiArrowRightSLine className="font-bold text-[#F8D835]" />
                        What we do?
                    </div>
                    <div className="text-[#F8D835] uppercase"> About us</div>
                </div>
            </div>
            {/* -----------section2-------- */}
            <div className="w-full flex flex-col justify-center items-center bg-[#172B6B] gap-4">
                <div className="w-full flex flex-col  lg:flex-row justify-around items-center gap-10 sm:gap-[26px] p-4 lg:p-10">

                    <div className="max-w-[545px]  max-h-[545px]">
                        <img src="./aboutUs/section2_balance.svg" alt="balance" className="w-auto h-auto" />
                    </div>
                    <div className="w-full max-w-[720px] ">
                        <PanelSetup title={sec2title} subtitle={sec2subtitle} contexts={sec2contexts} />
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-6 p-4">
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <div className="border-l-2 border-[#F8D835] px-1 md:px-2 text-center text-[#F8D835] font-normal text-[20px] sm:text-[24px] font-bungeeinline">
                            mineralex group
                        </div>

                        <div className="font-bold text-white font-bungeeinline  text-3xl sm:text-[42px] uppercase ">
                            SHAREHOLDERS
                        </div>
                    </div>

                    <div className="contain w-full flex flex-col lg:flex-row justify-around gap-6 p-4">
                        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center">
                            <div style={{ width: 270 }}>
                                <img src="./aboutUs/alex.svg" alt="alex_photo" className="w-full h-auto" />
                            </div>
                            <div className="flex-1 lg:max-w-[330px] h-full flex flex-col justify-around items-center rounded-2xl bg-white p-4">
                                <div className="text-[22px] font-bungeeinline font-normal text-center">
                                    ALEXANDER DASHEVSKI
                                </div>
                                <div className="h-full contain flex flex-col justify-center items-center  text-[16px] font-montserrat font-light text-center break-all">
                                    JHDIAWGDBIAUW GYFAOFHOKJFHOIEHSFNOIUSHNRIUOGNOAIUHOIURGNOIRNHGVUHf
                                </div>

                            </div>
                        </div>


                        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center">
                            <div style={{ width: 270 }}>
                                <img src="./aboutUs/shraga.svg" alt="alex_photo" className="w-full h-auto" />
                            </div>
                            <div className="flex-1 lg:max-w-[330px] h-full flex flex-col justify-around items-center rounded-2xl bg-white p-4">
                                <div className="text-[22px] font-bungeeinline font-normal text-center">
                                    SHRAGA ISRAEL
                                </div>
                                <div className="h-full contain flex flex-col justify-center items-center  text-[16px] font-montserrat font-light text-center   ">
                                    M.Sc. in Finance, entrepreneur, establish and manage large scale geological research projects for 20 years, managed large agriculture and water projects, West Africa community support advocate                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* -------------section3------------ */}

            <div className="w-full flex flex-col justify-center items-center bg-white gap-4">
                <div className="w-full flex flex-col  lg:flex-row justify-around items-center gap-10 sm:gap-[26px] p-6 lg:p-10">
                    <div className="w-full max-w-[720px] flex flex-col justify-center items-start gap-10">
                        <div className="contain w-full h-auto flex flex-col items-start justify-center  gap-4 pl-[25px] pr-[10px] pt-[35px] z-10 relative">
                            <div className="hidden sm:block w-[212px] h-[131px] absolute right-0 -top-10">
                                <img src="./aboutUs/logo_blue.svg" alt="blue logo" className="w-full h-auto " />
                            </div>
                            <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[20px] font-bungeeinline">{sec3title}</div>
                            <div className="font-bold text-[#3CCDB3] font-bungeeinline text-[42px] uppercase ">{sec3subtitle}</div>
                            {sec3contexts.map((context, index) => (
                                <div key={index}>
                                    {context}
                                </div>
                            ))}

                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4">
                            <ProfitDisplay value="10%" explanation="Sella Limba Chiefdom" />
                            <ProfitDisplay value="10%" explanation="Sanda Loko Chiefdom" />
                            <ProfitDisplay value="80%" explanation="Mineralex Group" />
                        </div>
                    </div>
                    <div className="max-w-[545px]  max-h-[545px]">
                        <img src="./aboutUs/map.svg" alt="map" className="w-auto h-auto" />
                    </div>

                </div>

                <div className="w-full flex flex-col justify-center items-center gap-6 p-4">

                    <div className="font-bold text-[#3CCDB3] font-bungeeinline  text-3xl sm:text-[42px] uppercase mt-20">
                        History
                    </div>



                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
                        <div className="contain h-[600px] flex flex-col justify-center items-start font-montserrat font-light text-left p-6 rounded-2xl shadow-lg ">
                            <div className="font-bold text-[22px]">
                                1931:
                            </div>
                            <div className="text-[20px]">
                                <span className="font-bold">The Geological Survey of Sierra Leone </span> - Frst discovered alluvial gold in the Laminaia area of Loko Hills
                            </div>
                            <div className="font-bold text-[22px]">
                                2004:
                            </div>
                            <div className="text-[20px]">
                                <span className="font-bold">CDR Resources </span>commissioned a study of gold potential in Loko Hills.
                            </div>
                        </div>

                        <div className="contain h-[600px] flex flex-col justify-center items-start font-montserrat font-light text-left p-6 rounded-2xl shadow-lg  ">
                            <div className="font-bold text-[22px]">
                                2008:
                            </div>
                            <div className="text-[20px]">
                                <div className="font-bold">AMR (Avivit Minerals Company). </div>First Exclusive Exploration License and first Mineral Rights agreements with Local Chiefdoms. Exploration included mapping, pitting, trenching, trial mining of Gold, Uranium and Diamonds.
                            </div>
                        </div>

                        <div className="contain h-[600px] flex flex-col justify-center items-start font-montserrat font-light text-left p-6 rounded-2xl shadow-lg  ">
                            <div className="font-bold text-[22px]">
                                2011:
                            </div>
                            <div className="text-[20px]">
                                <span className="font-bold">AMR (Avivit Minerals) Gold </span> prioritized gold and coltan in the Ranongo Ridge and Wilkinson area.  Exploration included Geochemical sampling, Geophisical surveys, Pitting, Trenching, Scout drilling, Bulk sampling and Trial mining, revealing gold-bearing schist zones with high grades and coltan-bearing type 3 Pegmatites with high Tantalum grades.
                            </div>
                        </div>

                        <div className="contain h-[600px] flex flex-col justify-center items-start font-montserrat font-light text-left p-6 rounded-2xl shadow-lg  ">
                            <div className="font-bold text-[22px]">
                                2022:
                            </div>
                            <div className="text-[20px]">
                                <span className="font-bold">Mineralex Group  </span>established <span className="font-bold">Mineralex (SL), </span>a successor of AMR AS part of strategic shift from a traditional mining entity to blockchain-based mining and tokenization entity..
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* -------------------section4-------------- */}
            <div className="w-full flex flex-col justify-center items-center py-10">
                <div className="w-full h-full hidden md:block">
                    <img src="./aboutUs/sec6bg.svg" alt="sec6_bg" className="w-full h-auto" />
                </div>

                <div className="w-[90%] h-full flex flex-col md:flex-row justify-around items-start gap-6 md:gap-0 p-4 sm:p-10 -mt-5 lg:-mt-10 z-10  bg-white  rounded-2xl shadow-2xl ">
                    <div className="contain h-full flex flex-col justify-start items-center md:items-start gap-6 font-montserrat font-light text-center md:text-left sm:p-10">
                        <div className="font-bold text-[32px] text-[#3CCDB3] font-bungeeinline">
                            STAFF
                        </div>
                        <div className="text-[20px]">
                            Mineralex focuses on building local capacity in Sierra Leone through merit-based hiring and comprehensive training programs. The company offers competitive salaries and emphasizes developing local talent to reduce expatriate dependency, while ensuring compliance with international standards.
                        </div>
                    </div>

                    <div className="contain h-full flex flex-col justify-start items-center md:items-start gap-6 font-montserrat font-light text-center md:text-left sm:p-10">
                        <div className="font-bold text-[32px] text-[#3CCDB3] font-bungeeinline">
                            POLICIES
                        </div>
                        <div className="text-[20px]">
                            The Mineralex Group is deeply committed to maintaining its integrity by adopting policies which aligns with global anti-corruption standards, including the U.S. Foreign Corrupt Practices Act and Canada’s Corruption of Foreign Public Officials Act.
<br />
<br />
                            Mineralex policies includes Anti-Corruption, Anti-Bribery, and Anti-Fraud Policy, Code of Business Conduct and Ethics, Environmental Policy, Health and Safety Policy.
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
};

export default AboutUs;