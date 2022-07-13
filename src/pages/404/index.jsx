import { Link } from 'react-router-dom';

function Error({ error = 'page' }) {
  return (
    <main id='Error'>
      <h1>404</h1>
      {error === 'home' ? (
        <h2>
          Oups! Nous ne trouvons plus les logements. Nous nous chargeons de
          résoudre ce problème au plus vite.
        </h2>
      ) : error === 'accommodation' ? (
        <h2>Oups! Nous ne trouvons pas le logement que vous cherchez.</h2>
      ) : (
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      )}
      {error === 'home' ? (
        <Link to='/Kasa/about'>Voir la page à propos</Link>
      ) : (
        <Link to='/Kasa/'>Retourner sur la page d'accueil</Link>
      )}
    </main>
  );
}

export default Error;
