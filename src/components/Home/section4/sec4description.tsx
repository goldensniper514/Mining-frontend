interface Sec4DescriptionProps {
    imgsource: string;
    imgsize: string;
    contexts: string;
    fontColor?: string;
}
const Sec4Description: React.FC<Sec4DescriptionProps> = ({ imgsource, imgsize, contexts, fontColor }) => {
    return (
        <div className="contain w-full h-auto flex flex-col text-center items-center justify-center gap-4">
            <div style={{ width: `${imgsize}` }}>
                <img
                    src={imgsource}
                    alt="trayicon"
                    className=" w-auto h-auto z-20"
                />

            </div>

            <div className={`w-full font-normal ${fontColor ? `text-${fontColor}` : "text-black"} font-montserrat text-[22px] flex-wrap `}>
                {contexts}
            </div>
        </div>
    );
};
export default Sec4Description;
