interface History_PanelProps {
    title: string;
    contexts: string;
    // button: string;
}
const History_Panel: React.FC<History_PanelProps> = ({ title, contexts }) => {
    return (
        <div className="contain flex flex-col justify-center items-start font-montserrat font-light text-center  break-all">
            <div className="font-bold text-[22px]">
                {title}
                </div>
            <div className="text-[20px]">
{contexts}
            </div>
        </div>
    );
};
export default History_Panel;
