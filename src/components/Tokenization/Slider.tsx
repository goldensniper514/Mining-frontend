import React, { useState, useEffect } from "react";
import Slider_Panel from "./Slider_Panel";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface SliderProps {
    images: string[];
}
const sliderTitle = [
    "Bridging Mining & Blockchain Technology",
    "Utility Token",
    "high-value mineral assets",
];
const sliderSubtitle = [
    "Tokenizing Real-World Gold and Mineral Assets",
    "Unlocking Platform Benefits",
    "The Advantage of Tokenization",
];
const sliderContexts = [
    [
        "Mineralex Group revolutionize mineral exploration and extraction through tokenized operations, enabling widespread investor participation and empowering local African communities.",
        "By combining blockchain’s transparency with the tangible backing of real-world assets, Mineralex aims to create secure, accessible, and profitable mining investment opportunities for global investors.",
    ],
    [
        "The Utility Token serves as the key to unlocking the full potential of the Mineralex platform. Token holders gain governance rights, allowing them to participate in key decision-making processes. The token also offers staking options with attractive rewards, incentivizing long-term commitment to the project.",
    ],
    [
        "This innovative approach enables fractional ownership, making high-value mineral assets accessible to investors worldwide. With blockchain's inherent transparency and immutability, investors can trust the accuracy of records and transactions.",
    ]

];
const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount({currentIndex}) => {currentIndex} + 1);
    //   }, 1000);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    //   }, 1000);
    //   console.log(`'dfdddddf' ${currentIndex}`);
    // },[currentIndex]);

    console.log(`'dfdf' ${currentIndex}`);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    // var len = images[currentIndex].length;

    return (
        <div className="w-full xl:h-[750px] flex flex-col justify-center xl:justify-start items-center gap-6  bg-[#172B6B]  bg-[url('../public/home/section4.svg')] bg-cover bg-center  p-4 xl:py-12 relative ">
            <div className="w-full  flex flex-row justify-center items-start gap-10 ">
                <div className=" rounded-[26px] relative">
                    <img
                        src={
                            images[currentIndex % images.length]
                        }
                        alt={`Slide ${currentIndex % images.length + 1}`}
                        className="w-full h-auto"
                    />
                    <div className="flex justify-center gap-3 xl:hidden mt-4">
                        {images.map((_, index) => (
                            <div
                                className={`w-[5.82px] h-[5.82px] rounded-full cursor-pointer ${index === currentIndex ? "bg-[#3CCDB3]" : "bg-[#F8D835]"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>

                    <button
                        className="xl:hidden absolute top-1/2 -left-0 transform -translate-y-1/2 w-12 h-12  font-[600] bg-inherit text-[#3CCDB3] focus:outline-none flex justify-center items-center"
                        onClick={prevSlide}
                    >
                        <MdOutlineKeyboardArrowLeft className="text-4xl sm:text-6xl" />
                    </button>
                    <button
                        className="xl:hidden absolute top-1/2 -right-0 transform -translate-y-1/2 w-12 h-12  font-[600] bg-inherit text-[#3CCDB3]   focus:outline-none flex justify-center items-center"
                        onClick={nextSlide}
                    >
                        <MdOutlineKeyboardArrowRight className="text-4xl sm:text-6xl" />
                    </button>

                    <div className="hidden xl:flex flex-row items-center justify-start gap-6 p-4 absolute -bottom-28 right-1/2 transform translate-x-1/2 xl: left-0 xl:transform-none">
                        <button
                            className="w-[70px] h-[70px] font-[600] bg-white text-black  rounded-full focus:outline-none flex justify-center items-center"
                            onClick={prevSlide}
                        >
                            <MdOutlineKeyboardArrowLeft className="text-4xl sm:text-6xl" />

                        </button>
                        <button
                            className="w-[70px] h-[70px] font-[600] bg-white text-black  rounded-full focus:outline-none flex justify-center items-center"
                            onClick={nextSlide}
                        >
                            <MdOutlineKeyboardArrowRight className="text-4xl sm:text-6xl" />

                        </button>
                    </div>

                </div>
                <div className="font-montserrat text-[90px] font-medium leading-none text-[#F8D835] stroke-red-500 stroke-1 hidden xl:block">
                    0{currentIndex % images.length + 1}
                </div>
            </div>
            <div className="w-full max-w-[650px] xl:absolute top-[50%] left-[55%] xl:top-1/3 xl:left-1/2">
                <Slider_Panel title={sliderTitle[currentIndex]} subtitle={sliderSubtitle[currentIndex]} contexts={sliderContexts[currentIndex]} />
            </div>
        </div>
    );
};

export default Slider;



