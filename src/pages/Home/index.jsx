import { useState, useEffect } from 'react';

import fetchData from '../../functions/fetchData';
import AccommodationCard from '../../components/AccommodationCard';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <main id="Home">
      <section className='intro'>
        <h1><span>Chez vous, </span><span>partout et ailleurs</span></h1>
      </section>
      <section className='accommodations'>
        {data.map((accommodation) => (
          <AccommodationCard
            key={`accommodation-${accommodation.id}`}
            to={`/accommodation/${accommodation.id}`}
            accommodation={accommodation}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
