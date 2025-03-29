import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
interface DisplayAmountProps {
    value: string;
    explanation: string;
}
const DisplayAmount: React.FC<DisplayAmountProps> = ({ value, explanation }) => {
    const Ref = useRef(null);
    const InView = useInView(Ref, { once: false, amount: 0.2 });
    return (
        <motion.div
            ref={Ref}
            initial="hidden"
            animate={InView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 4, type: "spring", bounce: 0.4 } },
            }} 
        className="contain w-full flex flex-col text-center items-center justify-between gap-4">
            <div  className="flex-1 font-normal text-[#F8D835] font-bungeeinline text-[30px] sm:text-[50px] lg:text-[30px] 2xl:text-[58px] flex-wrap ">
                {value}
            </div>

            <div className="flex-1 font-normal text-white font-montserrat text-[16px] sm:text-[22px] flex-wrap ">
                {explanation}
            </div>
        </motion.div>
    );
};
export default DisplayAmount;
