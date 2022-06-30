import { Link } from 'react-router-dom';

function Error() {
  return (
    <main id="Error">
      <div className='container'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
