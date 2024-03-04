// import Banner from "../../Components/Header/Banner";
import { useLoaderData } from "react-router-dom";
// import Navbar from "../../Components/Header/Navbar";
import DonationCardList from "./DonationCardList";
import { useState } from "react";
const Home = () => {
    //loading data
    const donationData = useLoaderData();
    // declare a state to store input data 
    const [inputText, setInputText] = useState("");
    // console.log(donationData);
    const handleSearchBtn =(e)=>{
        setInputText(e.target.value);
    }
    // declare a state to store the matched category donations data 
    const [matchDonation, setMatchedDonation] = useState(donationData);
    const handleShowDonationList =()=>{
        const matchDonationData = donationData.filter(donation => donation.Category.toLowerCase() === inputText.toLowerCase());
        console.log(matchDonationData);
        if(matchDonationData){
            setMatchedDonation(matchDonationData);
        }
    };

    return (
        <div className="max-w-[1330px] mx-auto mb-20">
            <div className="h-[450px] bg-black opacity-20 w-full bg-[url('/public/banner1.jpeg')] bg-cover bg-center">
            </div>
            <div className="-mt-64">
                <h1 className="text-center text-4xl opacity-100 font-bold mb-6">I Grow By Helping People In Need</h1>
                <div className="relative flex h-10 w-full mx-auto  min-w-[200px] max-w-[24rem]">
                <input onChange={handleSearchBtn} value={inputText}
                    type="text"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                />
                <button onClick={handleShowDonationList}
                    className="!absolute right-1 top-1 z-10 select-none rounded bg-red-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-80 peer-placeholder-shown:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Search
                </button>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-900">
                    Search Here...
                </label>
                </div>
            </div>
            {/* Showing donation card  */}
            <div className="flex justify-center mx-auto mt-60">
                <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {
                        // mapping through all data 
                        matchDonation?.map(donation => <DonationCardList key={donation.ID} donation={donation}></DonationCardList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;