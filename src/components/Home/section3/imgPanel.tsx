interface imgPanelProps {
    source: string;
}
const imgPanel: React.FC<imgPanelProps> = ({ source }) => {
    return (
        <div className={"w-[279px] h-[445.5px] relative"}>
            <div className="w-1/3 h-1/3 bg-[#F8D835] z-10 absolute -top-1 -left-1"></div>
            <img
                src={source}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-20"
            />
            <div className="w-1/3 h-1/3 bg-[#F8D835] z-10 absolute -right-1 -bottom-1"></div>

        </div>

    );
};
export default imgPanel;
