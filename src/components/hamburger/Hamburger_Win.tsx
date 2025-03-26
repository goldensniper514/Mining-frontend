
import React from "react";
interface Hamburger_Win_Props {
    hidden: boolean;
}

const Hamburger_Win: React.FC<Hamburger_Win_Props> = (props: Hamburger_Win_Props) => {

    return (
        // setOn_Win ?? alert("dfdfdf");

        <div className={`fixed flex-col p-12 flex gap-6 h-[100vh] h-full w-[400px]  bg-[#000000dd] top-0 left-0 sm:hidden ${props.hidden ? 'hidden' : 'visible'}  `}>
            {/* <Button_ares name="Collectors" color="#7E8FAA" bg_color="inherit" />
            <Button_ares name="Storers" color="#7E8FAA" bg_color="inherit" />
            <Button_ares name="Creators" color="#7E8FAA" bg_color="inherit" />
            <Button_ares name="Rycycler" color="#7E8FAA" bg_color="inherit" /> */}
        </div>
    );
}
export default Hamburger_Win