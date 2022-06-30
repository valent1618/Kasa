import { useParams } from 'react-router-dom';

function Accommodation() {
  const { id } = useParams();

  return (
    <main id="Accommodation">
      <h1>Logement : { id }</h1>
    </main>
  );
}

export default Accommodation;
