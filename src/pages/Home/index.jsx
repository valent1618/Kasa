import { useState, useEffect } from 'react';

import fetchData from '../../functions/fetchData';

import Error from '../404';
import LoaderCard from '../../components/LoaderCard';
import AccommodationCard from '../../components/AccommodationCard';

function Home() {
  const [data, setData] = useState('loading');

  useEffect(() => {
    fetchData(setData);
  }, []);

  if (data === undefined) {
    // if data has some issues, returns an error
    return <Error error='home' />;
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
                  accommodation={accommodation}
                />
              ))}
        </section>
      </main>
    );
  }
}

export default Home;
