import React, { useState, useEffect } from 'react';

import Card from '../../components/Card/Card';
import cls from './Details.css';

export default ({ match }) => {
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   fetchFromDB(`event/${match.params.id}`, setProduct);
  // }, []);

  return (
    <>
      <Card />
      {/* <Card />
      <Card /> */}
    </>
  );
};
