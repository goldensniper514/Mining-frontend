interface ProfitDisplayProps {
    value: string;
    explanation: string;
}
const ProfitDisplay: React.FC<ProfitDisplayProps> = ({ value, explanation }) => {
    return (
        <div className="contain w-full flex flex-col text-center items-center justify-between gap-4">
            <div  className="flex-1 font-normal text-[#3CCDB3] font-bungeeinline text-[36px] flex-wrap ">
                {value}
            </div>

            <div className="flex-1 font-normal text-black font-montserrat text-[22px] flex-wrap ">
                {explanation}
            </div>
        </div>
    );
};
export default ProfitDisplay;
