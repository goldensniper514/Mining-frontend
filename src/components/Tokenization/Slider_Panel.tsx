interface Slider_PanelProps {
    title: string;
    subtitle: string;
    contexts: string[];
}
const Slider_Panel: React.FC<Slider_PanelProps> = ({ title, subtitle, contexts }) => {
    return (
        <div className="contain w-full h-auto bg-white flex flex-col items-start justify-center  gap-4 pl-[25px] pr-[10px] pt-[35px] z-10 rounded-[26px] py-16">
            <div className="border-l-2 border-[#172B6B] px-2 text-[#172B6B] font-bold text-[20px] font-bungeeinline ">{title}</div>
            <div className="font-bold text-[#F8D835] font-bungeeinline text-[20px] uppercase ">{subtitle}</div>
            {contexts.map((context, index) => (
                <div key={index}>
                    {context}
                </div>
            ))}
        </div>
    );
};
export default Slider_Panel;
