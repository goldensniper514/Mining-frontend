interface PanelProps {
  title: string;
  context: string;
}
const Panel: React.FC<PanelProps> = ({ title, context }) => {
  return (
    <div className="bg-[#FFD042] w-full font-subway flex flex-col items-center justify-between pt-[34px] pl-[10px] pr-[2px] pb-[36px] border-[1px] border-[#69A94E] rounded-[10px] relative">
      <img
        src="./panel_bg.png"
        alt="panel_bg"
        className="w-full h-full absolute top-0 left-0"
      />
      <div className="text-center text-[#000000] text-[20px] font-montserrat font-[700] leading-[35.39px]">
        {title}
      </div>
      <div className="wrap-text text-[#000000] text-[14px] font-montserrat font-[400] text-center leading-[16.8px] mt-[8px] mb-[18px]">
        {context}
      </div>
      <button className="min-w-[80px] min-h-[26px] bg-[#C28D00] font-montserrat text-white text-[10px] leading-[12.19px] px-[14px] py-[11] pt-[6px] pb-[8px] md:text-base md:px-4 md:py-2 rounded-lg border-[1.41px] border-black focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#927b3c] truncate">
        Read More
      </button>
    </div>
  );
};
export default Panel;
