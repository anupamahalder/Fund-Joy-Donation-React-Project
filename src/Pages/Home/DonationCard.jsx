// import { colors } from '@mui/material';
import PropTypes from 'prop-types'; 
const DonationCard = ({donation}) => {
    //destructuring donation ojbect
    const {ID, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg} = donation;
    return (
        <div className='rounded-xl h-60 p-2' style={{backgroundColor: Card_bg}}>
            <img className='h-36 w-60 rounded-xl' src={Picture} alt="" />
        </div>
    );
};
//Adding proptypes
DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}
export default DonationCard;