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
        <>
        <div className="max-w-[1330px] flex justify-center my-20 mx-auto">
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
        <div className="flex justify-center mb-20">
        {/* when button will be clicked the value of the button will also be changed */}
        {
            donationData.length > 4 ? <button onClick={() => setIsShowAll(!isShowAll)}
             className="py-2 px-3 text-white bg-green-800 rounded-xl">
            {
                isShowAll ? 'See Less':'See More'
            }</button>
            :''
        }
    </div> </>
    );
};

export default Donation;