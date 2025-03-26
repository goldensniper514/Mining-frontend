interface PanelSetupProps {
  title: string;
  subtitle: string;
  contexts: string[]; 
  // button: string;
}
const PanelSetup: React.FC<PanelSetupProps> = ({ title, subtitle, contexts}) => {
  return (
    <div className="contain w-full h-auto  bg-[url('../public/home/Vector2.png')] bg-cover bg-center  flex flex-col items-start justify-center  gap-4 border-l-[19px] border-[#F8D835] pl-[25px] pr-[10px] pt-[35px] pb-[80px] z-10 relative">
      <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[23px] font-bungeeinline">{title}</div>
      <div className="font-bold text-[#F8D835] font-bungeeinline text-[22px] uppercase ">{subtitle}</div>
      {contexts.map((context, index) => (
        <div key={index}>
          {context}
        </div>
      ))}
    
      {/* <button className="min-w-[123px] min-h-[32.8px] bg-[#172B6B] font-montserrat text-white text-[14px] px-2 py-1 md:text-[19px] md:px-10 md:py-5 rounded-2xl focus:outline-none shadow-md  hover:bg-[#8a936d80] active:bg-[#babd8a] truncate">
        <div className="flex flex-row gap-1 justify-center items-center  font-bold ">
          {button}
        </div>
      </button>    */}

    </div>
  );
};
export default PanelSetup;
