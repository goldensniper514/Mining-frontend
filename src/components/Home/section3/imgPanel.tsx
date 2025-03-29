import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface ImgPanelProps {
    source: string;
}
const ImgPanel: React.FC<ImgPanelProps> = ({ source }) => {
    const imgPanelRef = useRef(null);
    const imgPanelInView = useInView(imgPanelRef, { once: false, amount: 0.2 });
    return (
      <motion.div
        ref={imgPanelRef}
        initial="hidden"
        animate={imgPanelInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 4, type: "spring", bounce: 0.4 } },
        }}
        className={"w-[279px] h-[445.5px] relative"}>
            <div className="w-1/3 h-1/3 bg-[#F8D835] z-10 absolute -top-1 -left-1"></div>
            <img
                src={source}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-20"
            />
            <div className="w-1/3 h-1/3 bg-[#F8D835] z-10 absolute -right-1 -bottom-1"></div>

        </motion.div>

    );
};
export default ImgPanel;
