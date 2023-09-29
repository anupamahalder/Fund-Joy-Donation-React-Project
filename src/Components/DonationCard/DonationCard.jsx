import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
const DonationCard = ({donation}) => {
    //destructuring donation ojbect
    const {ID,Picture, Title, Category, Category_bg, Card_bg, Price, Text_button_bg} = donation;
    return (
        <div
            className='rounded-xl h-60 p-2 mb-4 flex gap-6' style={{backgroundColor: Card_bg}}>
                <img className='h-56 w-60 rounded-xl mx-auto' src={Picture} alt="" />
                <div className='w-60'>
                    <button className='px-2 py-1 my-5 rounded-md cursor-default font-semibold' style={{backgroundColor: Category_bg, color:Text_button_bg}}>{Category}</button>
                    <h1 className='pl-2 font-bold text-2xl text-black'>{Title}</h1>
                    <h1 className='font-semibold px-2 pt-1' style={{color: Text_button_bg}}>{Price}</h1>
                    <Link to={`/donation/${ID}`}>
                        <button
                        className='px-2 py-1 my-5 rounded-md font-semibold text-white' style={{backgroundColor: Text_button_bg}}>View Details</button>
                    </Link>
                </div>
        </div>
    );
};
//Adding proptypes
DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}
export default DonationCard;