import PropTypes from 'prop-types';
const DonationDetail = ({findDonation}) => {
    // console.log(findDonation);
    return (
        <div>
            <h1>Hello donation details</h1>
        </div>
    );
};

//Adding prop-types
DonationDetail.propTypes = {
    findDonation: PropTypes.object.isRequired,
}
export default DonationDetail;