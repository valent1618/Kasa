import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import fetchData from '../../functions/fetchData';

import Loader from '../../components/Loader';
import Gallery from '../../components/Gallery';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';

import Star from '../../assets/star';

function Accommodation() {
  const { id } = useParams();

  const [data, setData] = useState('loading');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(setData, id);
  }, [id]);

  if (data === undefined) {
    // if data has some issues, returns an error
    return (
      <main id='Error'>
        <h1>404</h1>
        <h2>Oups! Nous ne trouvons pas le logement que vous cherchez.</h2>
        <Link to='/Kasa'>Retourner sur la page d'accueil</Link>
      </main>
    );
  } else if (data === 'loading') {
    // returns loader until fetch is complete
    return (
      <main className='main-loading'>
        <Loader />
      </main>
    );
  } else {
    return (
      <main id='Accommodation'>
        <section className='gallery-section'>
          <Gallery pictures={data.pictures} />
        </section>
        <section className='info'>
          <div className='info-accommodation'>
            <h2>{data.title}</h2>
            <h4>{data.location}</h4>
            <div className='tags-container'>
              {data.tags.map((tag, index) => (
                <Tag key={`tag-${index}`} tag={tag} />
              ))}
            </div>
          </div>
          <div className='info-host'>
            <div className='host'>
              <div className='name'>
                {data.host.name.split(' ').map((name, index) => (
                  <h4 key={`name-${index}`}>{name}</h4>
                ))}
              </div>
              <img src={data.host.picture} alt='Propriétaire' />
            </div>
            <div className='rating'>
              {[...Array(5).keys()].map((index) =>
                index + 1 > data.rating ? (
                  <Star key={`star-${index}`} />
                ) : (
                  <Star full={true} key={`star-${index}`} />
                )
              )}
            </div>
          </div>
        </section>
        <section className='collapses'>
          <Collapse title='Description' body={data.description} />
          <Collapse title='Équipements' body={data.equipments} />
        </section>
      </main>
    );
  }
}

export default Accommodation;
