import { Link } from "react-router-dom";
const Footer = () => {
    const getCurrentYear = ()=>{
        return new Date().getFullYear();
    }
    return (
        <div className="bg-gray-900 h-60">
            <div className="flex gap-10 justify-around items-center text-white">
                <div className="p-6">
                    <h1>Copyright &copy; Donation Campaign {getCurrentYear()}</h1>
                </div>
                <div className="p-10 ">
                    <ul className="flex flex-col gap-6">
                        <Link to='/'>Home</Link>
                        <Link to='/donations'>Donation</Link>
                        <Link to='/statistics'>Statistics</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;