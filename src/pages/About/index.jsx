import about from '../../data/about';

import Collapse from '../../components/Collapse';

function About() {
  return (
    <main id='About'>
      <section className='intro' />
      <section className='about'>
        {about.map((data) => (
          <Collapse
            title={data.title}
            body={data.body}
            about={true}
            key={`about-${data.title}`}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
