import { useState } from "react";
import React from "react";
export interface HamburgerProps {
    /** Callback function, which should be executed on click */
    onClick: () => void;

    /** Initial state of our button */
    isInitiallyOpen?: boolean;
}

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        onClick();
    }

    return (
        <div className="bg-[#F8D835] pl-[5px]  sm:pl-[30px] md:pl-[60px] pr-[15px] sm:pr-[25px] py-[5px] sm:py-[10px] rounded-r-full z-10">
            <button
                onClick={handleClick}
                type="button"
                className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer left-4 top-4 `}
            >
                <div
                    className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                />
                <div
                    className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'
                        }`}
                />
                <div
                    className={`bg-black block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                        }`}
                />
            </button>
        </div>

    );
}