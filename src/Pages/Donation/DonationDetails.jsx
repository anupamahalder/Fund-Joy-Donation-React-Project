import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../../Components/DonationCard/DonationDetail";

const DonationDetails = () => {
    //declare a state to store data
    const [dontaionData, setDonationData] = useState({});
    const donations = useLoaderData();
    //destructure id 
    const {ID} = useParams();
    // find the dotation card 
    useEffect (()=>{
        const findDonation = donations?.find(oneDonation => oneDonation.id == ID);
        //set to the state
        setDonationData(findDonation);
    },
    [ID, donations]);
    console.log('From donation one detail: ',dontaionData);
    return (
        <div className="my-20 mx-auto">
            <DonationDetail key={ID} dontaionData={dontaionData}></DonationDetail>
        </div>
    );
};

export default DonationDetails;