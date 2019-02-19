import React from 'react';
import Label from '../Label/Label';
import Pivot from '../Pivot/Pivot';
import Details from '../Details/Details';
import Questions from '../Questions/Questions';

import cls from './Card.css';

export default ({ type }) => {
  const cardType = () => {
    let types = {
      pivot: <Pivot />,
      details: <Details />,
      questions: <Questions />
    };
    return types[type];
  };

  return cardType();
};
