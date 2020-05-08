import React from 'react';
import { Link } from 'react-router-dom';

const Screenshots = (props) => {
  const params = props.match.params;
  return (
    <div>
      <p>Game Id: {params.id}</p>
    </div>
  );
}

export default Screenshots;
