import { useLoaderData } from "react-router-dom";
import DonationDetail from "../../Components/DonationCard/DonationDetail";

const DonationDetails = () => {
    const donations = useLoaderData();
    //destructure id 
    const {ID} = donations;
    const findDonation = donations?.find(oneDonation => oneDonation.id === ID);
    // console.log('From donation one detail: ',findDonation);
    return (
        <div className="my-20 mx-auto">
            <DonationDetail key={ID} findDonation={findDonation}></DonationDetail>
        </div>
    );
};

export default DonationDetails;