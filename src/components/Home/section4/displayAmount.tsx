interface DisplayAmountProps {
    value: string;
    explanation: string;
}
const DisplayAmount: React.FC<DisplayAmountProps> = ({ value, explanation }) => {
    return (
        <div className="contain w-full flex flex-col text-center items-center justify-between gap-4">
            <div  className="flex-1 font-normal text-[#F8D835] font-bungeeinline text-[30px] sm:text-[50px] lg:text-[30px] 2xl:text-[58px] flex-wrap ">
                {value}
            </div>

            <div className="flex-1 font-normal text-white font-montserrat text-[16px] sm:text-[22px] flex-wrap ">
                {explanation}
            </div>
        </div>
    );
};
export default DisplayAmount;
