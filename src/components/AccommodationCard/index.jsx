import { Link } from 'react-router-dom';

function AccommodationCard({ accommodation }) {
  return (
    <Link
      to={`/Kasa/accommodation/${accommodation.id}`}
      className='accommodation-card'
    >
      <img src={accommodation.cover} alt={accommodation.title}></img>
      <div className='card-body'>
        <h4>{accommodation.title}</h4>
      </div>
    </Link>
  );
}

export default AccommodationCard;
