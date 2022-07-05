import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../functions/fetchData';

import AccommodationCard from '../../components/AccommodationCard';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  if (data === undefined || data.length === 0) {
    return (
      <main id='Error'>
        <h1>404</h1>
        <h2>
          Oups! Nous ne trouvons plus les logements. Nous nous chargeons de
          résoudre ce problème au plus vite.
        </h2>
        <Link to='/about'>Voir la page à propos</Link>
      </main>
    );
  } else {
    return (
      <main id='Home'>
        <section className='intro'>
          <h1>
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
          </h1>
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
}

export default Home;
