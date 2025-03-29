import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer: React.FC = () => {
  // Refs for in-view detection
  const quickApproachRef = useRef(null);
  const imageRef = useRef(null);
  const mainSectionRef = useRef(null);
  const bottomRef = useRef(null);

  // In-view hooks (animations trigger once when in view)
  const quickApproachInView = useInView(quickApproachRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });
  const mainSectionInView = useInView(mainSectionRef, { once: true });
  const bottomInView = useInView(bottomRef, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center">
      {/* Quick Approach Section */}
      <div className="contain w-full bg-[#F9F9F9] flex flex-col items-center sm:items-start justify-center gap-4 px-[50px] py-[35px]">
        <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[23px] font-subway">QUICK APPROACH</div>
        <div className="font-bold text-[#F8D835] font-subway text-[27px] sm:text-[42px]">A QUICK LINKS</div>
        <motion.div
          ref={quickApproachRef}
          initial="hidden"
          animate={quickApproachInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Token Details Preview
            <FaArrowRight className="" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Exploration Highlights
            <FaArrowRight className="" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Community Impact
            <FaArrowRight className="" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Exploration & Resources
            <FaArrowRight className="" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Tokenization Advantage
            <FaArrowRight className="" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href=""
            className="w-full flex flex-row justify-between items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
          >
            Token Details Preview
            <FaArrowRight className="" />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Image */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
        className="w-full"
      >
        <img src="./footer.png" alt="footer_bg" className="w-full h-auto" />
      </motion.div>

      {/* Main Section with Logo, Subscription, and Links */}
      <div className="w-full flex flex-col justify-center items-center px-8">
        <motion.div
          ref={mainSectionRef}
          initial="hidden"
          animate={mainSectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 py-6 border-b-2 border-black"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-[400px] flex flex-col justify-center items-center p-4"
          >
            <motion.div
              variants={logoVariants}
              className="w-[100px] sm:w-[140px] xl:w-[178px] xl:h-[99px] z-10"
            >
              <img src="./logo.png" alt="logo" className="w-auto h-auto" />
            </motion.div>

            <div className="wrap-text text-black text-[20px] font-montserrat font-[500] text-center leading-[30px] mt-[20px] mb-[18px]">
              Subscribe News Letter
            </div>

            <motion.a
              variants={itemVariants}
              href=""
              className="w-full flex flex-row justify-around items-center font-montserrat text-black text-[14px] px-2 py-1 border-b-2 border-black md:text-[19px] md:px-10 md:py-5 focus:outline-none shadow-md hover:bg-[#8a936d80] active:bg-[#babd8a] truncate"
            >
              Enter E-Mail Address
              <MdArrowOutward />
            </motion.a>
          </motion.div>

          <div className="w-full max-w-[1000px] flex flex-col justify-center lg:justify-between items-center gap-9">
            <div className="w-full flex flex-col sm:flex-row justify-around items-center sm:items-start gap-2 lg:gap-8 truncate">
              <div className="flex flex-col justify-start items-center lg:items-start gap-2">
                <div className="font-subway text-2xl font-bold py-4">QUICK LINKS</div>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Home
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  About
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Tokenomics
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Hightlights
                </motion.a>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-2">
                <div className="font-subway text-2xl font-bold py-4">NEWZ</div>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Blog
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  FAQ
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Press kit
                </motion.a>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-2">
                <div className="font-subway text-xl sm:text-2xl font-bold py-4">INVESTMENT OPPORTUNITIES</div>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Primary Issuance Platform
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Sec Issuance Platform
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href=""
                  className="font-montserrat text-black text-lg hover:text-[#F8D835]"
                >
                  Get to Know
                </motion.a>
              </div>
            </div>

            <div className="w-full lg:w-2/3 lg:float-right grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-2 sm:gap-4 text-center">
              <motion.a
                variants={itemVariants}
                href=""
                className="font-montserrat text-black text-lg hover:text-[#F8D835]"
              >
                Facebook
              </motion.a>
              <motion.a
                variants={itemVariants}
                href=""
                className="font-montserrat text-black text-lg hover:text-[#F8D835]"
              >
                Instagram
              </motion.a>
              <motion.a
                variants={itemVariants}
                href=""
                className="font-montserrat text-black text-lg hover:text-[#F8D835]"
              >
                Linkedin
              </motion.a>
              <motion.a
                variants={itemVariants}
                href=""
                className="font-montserrat text-black text-lg hover:text-[#F8D835]"
              >
                Pinterest
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          ref={bottomRef}
          initial="hidden"
          animate={bottomInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="w-full flex flex-col justify-center items-center py-4 lg:justify-between lg:flex-row"
        >
          <div className="text-lg text-black font-montserrat truncate">
            © 2025 Minera Lex right reserved
          </div>

          <div className="flex flex-row justify-end items-center gap-4">
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">
              Terms & Condition
            </a>
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">
              Privacy Policy
            </a>
            <a href="" className="font-montserrat text-black text-lg hover:text-[#F8D835]">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;