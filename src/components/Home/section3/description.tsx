interface DescriptionProps {
    imgsource: string;
    imgsize: string;
    contexts: string;
    fontColor ?: string;
}
const Description: React.FC<DescriptionProps> = ({ imgsource, imgsize,  contexts, fontColor }) => {
    return (
        <div className="contain w-full h-auto flex flex-col lg:flex-row text-center lg:text-left items-center  lg:justify-start lg:gap-6">
            <div style={{width: `${imgsize}`}}>
                <img
                    src={imgsource}
                    alt="trayicon"
                    className=" w-auto h-auto z-20"
                />
            
            </div>

            <div className={`flex-1 font-normal ${fontColor ? `text-${fontColor}`: "text-black" } font-montserrat text-[22px] flex-wrap `}>{contexts}</div>           
        </div>
    );
};
export default Description;
