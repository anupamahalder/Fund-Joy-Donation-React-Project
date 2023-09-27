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
            <ul className={`md:flex md:gap-4 text-xl text-gray-600 font-semibold absolute md:static ${open===true ? "bg-white rounded-xl text-sm z-10 p-4 mt-36 shadow-lg flex flex-col gap-2 right-12": "-top-40"}`}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 border-b-2 border-red-600" : ""
                        }
                        >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donations"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 border-b-2 border-red-600" : ""
                        }
                        >Donations
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 border-b-2 border-red-600" : ""
                        }
                        >Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;