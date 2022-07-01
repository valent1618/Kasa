import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import fetchData from '../../functions/fetchData';
import Gallery from '../../components/Gallery';
import Tag from '../../components/Tag';

import Star from '../../assets/star';

function Accommodation() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(setData, id);
  }, [id])

  if(data.length === 0) {
    return (
      <main id="Accommodation">
        <h1>Pas de data</h1>
      </main>
    )
  } else {
    return (
      <main id="Accommodation">
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
              <h4>{data.host.name.split(' ')[0]}<br />{data.host.name.split(' ')[1]}</h4>
              <img src={data.host.picture} alt='Propriétaire' />
            </div>
            <div className='rating'>
              {[...Array(5).keys()].map((index) => (
                index + 1 > data.rating ? <Star key={`star-${index}`} /> : <Star full={true} key={`star-${index}`} /> 
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }

}

export default Accommodation;
