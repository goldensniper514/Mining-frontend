import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
interface Sec4DescriptionProps {
    imgsource: string;
    imgsize: string;
    contexts: string;
    fontColor?: string;
}
const Sec4Description: React.FC<Sec4DescriptionProps> = ({ imgsource, imgsize, contexts, fontColor }) => {
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
        className="contain w-full h-auto flex flex-col text-center items-center justify-center gap-4">
            <div style={{ width: `${imgsize}` }}>
                <img
                    src={imgsource}
                    alt="trayicon"
                    className=" w-auto h-auto z-20 m-auto"
                />

            </div>

            <div className={`w-full font-normal ${fontColor ? `text-${fontColor}` : "text-black"} font-montserrat text-[22px] flex-wrap `}>
                {contexts}
            </div>
        </motion.div>
    );
};
export default Sec4Description;
