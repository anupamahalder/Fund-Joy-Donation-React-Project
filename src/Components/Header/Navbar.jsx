import { NavLink } from "react-router-dom";
import { AiOutlineAlignRight, AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    //declare a state to store the icon is open or not with false inital value
    const [open, setOpen] = useState(false);
    return (
        <div className="py-6 px-10 flex justify-between items-center">
            <Logo></Logo>
            {/* A div to track which icon is open currently and this div is hidden for medium device */}
            <div className="md:hidden right-12 text-2xl text-gray-700" onClick={() => setOpen(!open)}>
                {
                    open===true ? <AiOutlineDown></AiOutlineDown>:<AiOutlineAlignRight></AiOutlineAlignRight>
                }
            </div>
                            {/* <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                Messages
                </NavLink>; */}
        </div>
    );
};

export default Navbar;