import swal from 'sweetalert';
import PropTypes from 'prop-types'
const DonationDetail = ({donation={}}) => {
    console.log(donation);
    // destructure the findonation
    const { ID, Price, Title, Picture,Text_button_bg} = donation;
    //handle donate button
    const handleDonateButton = () =>{
        // to store data from local storage by default empty array 
        const storeDonation = [];
        // checking local storage contain data or not 
        const donationFromLC =  JSON.parse(localStorage.getItem('donationList'));
        //if data is not available
        if(!donationFromLC){
            //push the donation data first time
            storeDonation.push(donation);
            localStorage.setItem('donationList',JSON.stringify(storeDonation));
        }
        else{
            const isExists = donationFromLC.find(donate => donate.ID === ID)
            // console.log(isExists);
            if(!isExists){
                swal("Good job!", "You have successfully donated!", "success");
                //when data is there in local storage
                storeDonation.push(...donationFromLC,donation);
                //set to local storage
                localStorage.setItem('donationList',JSON.stringify(storeDonation));
            }else{
                swal("Thanks!", "You already have donated!", "info");
            }
        }
    }
    return (
        <div>
            <img src={Picture} className='w-full h-[70vh] object-cover object-top mx-auto' alt="" />
            <div className='-mt-20'>
                <div className='bg-black/50 w-full h-20'>
                    <button onClick={handleDonateButton} 
                    className='p-4 ml-6 my-3 text-white font-semibold rounded-lg' style={{backgroundColor:Text_button_bg}}>Donate {Price}</button>  
                </div>
            </div>
            <h1 className='text-3xl font-bold my-4 mx-6'>{Title}</h1>
            <p className='mx-6 text-gray-700 '>
            Your generous donation can make a world of difference to those in need. Every contribution, whether big or small, helps us create a brighter future and provide essential assistance to those facing adversity. With your support, we can continue our mission to bring hope, relief, and positive change to the lives of individuals and communities in need. Your donation fuels our efforts to make the world a better place, and together, we can make a lasting impact that reverberates far beyond today. Please consider giving today and be a part of our journey towards a better tomorrow.
            </p>
        </div>
    );
};

//Adding prop-types
DonationDetail.propTypes = {
    donation: PropTypes.object.isRequired,
}
export default DonationDetail;