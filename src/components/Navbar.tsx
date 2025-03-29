import { BsList } from "react-icons/bs";
import { Hamburger } from "./hamburger/Hamburger";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Navbar: React.FC = () => {
  const hamburgerClick = () => {
    // Your existing hamburger click logic can go here
  };

  // Ref for vector image to detect when it enters the viewport
  const vectorRef = useRef(null);
  const vectorInView = useInView(vectorRef, { once: true });

  // Animation variants for each element
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const hamburgerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const vectorVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full h-0 m-auto">
      {/* Vector Image with Slide-In Animation */}
      <motion.img
        ref={vectorRef}
        initial="hidden"
        animate={vectorInView ? "visible" : "hidden"}
        variants={vectorVariants}
        src="./vector.png"
        alt="vector"
        className="w-[50%] h-auto absolute left-0 z-0 hidden lg:block"
      />

      {/* Navbar Content */}
      <div className="w-full flex justify-between lg:justify-start gap-5 items-center pt-[10px] sm:pt-[20px] md:pt-[35px] absolute left-0">
        {/* Hamburger with Fade-In and Slide Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={hamburgerVariants}
        >
          <Hamburger onClick={hamburgerClick} />
        </motion.div>

        {/* Logo with Scale and Fade Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="w-[100px] sm:w-[140px] xl:w-[178px] xl:h-[99px] 2xl:w-[301px] 2xl:h-[142px] z-20 transition-all duration-100"
        >
          <img src="./logo.png" alt="logo" className="w-auto h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;