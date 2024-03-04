import DonationCard from "../../Components/DonationCard/DonationCard";
// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
const Donation = () => {
    // const donationData = useLoaderData();
    // declare a state for store the data
    const [donationData, setDonationData] = useState([]);
    useEffect(()=>{
        const dataFromLC = JSON.parse(localStorage.getItem('donationList'));
        if(dataFromLC){
            setDonationData(dataFromLC);
        }
    },[]);
    //declare a state for show all or not 
    const [isShowAll, setIsShowAll] = useState(false);

    return (
        <div className="my-20 min-h-screen">
        <div className="max-w-[1330px] flex justify-center mx-auto">
            {
                donationData.length==0?
                <div className="h-[60vh] mx-auto flex justify-center items-center">
                    <p className="text-2xl font-semibold">No donation done yet!</p>
                </div>:
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        // mapping through all data 
                        isShowAll ? donationData.map(donation => <DonationCard key={donation.ID} donation={donation}></DonationCard>):
                        donationData.slice(0,4).map(donation => <DonationCard key={donation.ID} donation={donation}></DonationCard>)
                    }
                </div>
            }
        </div>
        <div className="md:flex md:justify-center">
        {/* when button will be clicked the value of the button will also be changed */}
        {
            donationData.length > 4 ? <button onClick={() => setIsShowAll(!isShowAll)}
             className="py-2 my-6 px-3 font-bold text-xl text-white bg-green-800 text-bold rounded-md">
            {
                isShowAll ? 'See Less':'See More'
            }</button>
            :''
        }
    </div> </div>
    );
};

export default Donation;