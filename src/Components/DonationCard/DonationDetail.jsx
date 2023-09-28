import PropTypes from 'prop-types';
const DonationDetail = ({findDonation}) => {
    // console.log(findDonation);
    // destructure the findonation
    const { Price, Title, Picture} = findDonation;
    return (
        <div className='max-w-[1300px] mx-auto mb-20 p-4'>
            <img src={Picture} className='h-[80vh] w-full rounded-xl mx-auto' alt="" />
            <p>
            Your generous donation can make a world of difference to those in need. Every contribution, whether big or small, helps us create a brighter future and provide essential assistance to those facing adversity. With your support, we can continue our mission to bring hope, relief, and positive change to the lives of individuals and communities in need. Your donation fuels our efforts to make the world a better place, and together, we can make a lasting impact that reverberates far beyond today. Please consider giving today and be a part of our journey towards a better tomorrow.
            </p>
        </div>
    );
};

//Adding prop-types
DonationDetail.propTypes = {
    findDonation: PropTypes.object.isRequired,
}
export default DonationDetail;