import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../../Components/DonationCard/DonationDetail";

const DonationDetails = () => {
    //declare a state to store data
    const [donation, setDonation] = useState({});
    const donations = useLoaderData();
    // console.log(donations); //string
    //destructure id 
    const {id} = useParams();
    // console.log('My id: ', id); //string
    // find the dotation card 
    useEffect (()=>{
        const findDonation = donations.find(donation => donation.ID == id);
        // console.log("I am from find donation",findDonation);
        
        //set to the state
        setDonation(findDonation);
    },[id, donations]);
    // console.log('From donation one detail: ',donation);
    return (
        <div className="max-w-[1300px] mx-auto mb-10">
            <DonationDetail key={id} donation={donation}></DonationDetail>
            {/* <h1>Hello from donation details</h1> */}
        </div>
    );
};

export default DonationDetails;