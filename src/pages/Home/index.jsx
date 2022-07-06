import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../functions/fetchData';

import LoaderCard from '../../components/LoaderCard';
import AccommodationCard from '../../components/AccommodationCard';

function Home() {
  const [data, setData] = useState('loading');

  useEffect(() => {
    fetchData(setData);
  }, []);

  if (data === undefined) {
    // if data has some issues, returns an error
    return (
      <main id='Error'>
        <h1>404</h1>
        <h2>
          Oups! Nous ne trouvons plus les logements. Nous nous chargeons de
          résoudre ce problème au plus vite.
        </h2>
        <Link to='/Kasa/about'>Voir la page à propos</Link>
      </main>
    );
  } else {
    // returns home page with preloaded cards until fetch is complete
    return (
      <main id='Home'>
        <section className='intro'>
          <h1>
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
          </h1>
        </section>
        <section className='accommodations'>
          {data === 'loading'
            ? [...Array(9).keys()].map((index) => (
                <LoaderCard key={`LoaderCard-${index}`} />
              ))
            : data.map((accommodation) => (
                <AccommodationCard
                  key={`accommodation-${accommodation.id}`}
                  to={`/Kasa/accommodation/${accommodation.id}`}
                  accommodation={accommodation}
                />
              ))}
        </section>
      </main>
    );
  }
}

export default Home;
