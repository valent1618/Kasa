import { useState } from 'react';

import CollapseArrow from '../../assets/collapse-arrow';

function Collapse({ title, body, about = false }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <div
      className={
        about
          ? collapse
            ? 'collapse about-collapse collapsed'
            : 'collapse about-collapse'
          : collapse
          ? 'collapse collapsed'
          : 'collapse'
      }
    >
      <div className='collapse-header' onClick={() => setCollapse(!collapse)}>
        {about ? <h3>{title}</h3> : <h4>{title}</h4>}
        <CollapseArrow rotate={!collapse} />
      </div>
      <div className='collapse-body'>
        {Array.isArray(body) ? (
          body.map((element, index) => (
            <p key={`${title}-${index}`}>{element}</p>
          ))
        ) : (
          <p>{body}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
