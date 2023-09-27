// import { colors } from '@mui/material';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
const DonationCard = ({donation}) => {
    //destructuring donation ojbect
    const {ID, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg} = donation;

    return (
        <Link to={`/donations/${ID}`}>
            <div
            className='rounded-xl h-80 p-2 mb-8' style={{backgroundColor: Card_bg}}>
                <img className='h-40 w-72 rounded-xl mx-auto' src={Picture} alt="" />
                <button className='ml-4 px-2 py-1 my-5 rounded-md font-semibold' style={{backgroundColor: Category_bg, color:Text_button_bg}}>{Category}</button>
                <h1 className='pl-4 font-bold text-2xl' style={{color: Text_button_bg}}>{Title}</h1>
            </div>
        </Link>
    );
};
//Adding proptypes
DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}
export default DonationCard;