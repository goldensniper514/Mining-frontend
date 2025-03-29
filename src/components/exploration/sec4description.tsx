interface Sec4DescriptionProps {
    imgsource: string;
    imgsize: string;
    contexts: string;
    fontColor?: string;
}
const Sec4Description: React.FC<Sec4DescriptionProps> = ({ imgsource, imgsize, contexts, fontColor }) => {
    return (
        <div className="contain  flex flex-col md:flex-row text-center md:text-left items-center justify-center gap-2">
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
        </div>
    );
};
export default Sec4Description;
