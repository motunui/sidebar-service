import React from 'react';
import Label from '../Label/Label';
import cls from './Card.css';

export default (params) => {
  return (
    <div className={cls.label_container}>
      <div className={cls.label_tag_group}>
        <Label label={`Featured Tours and Tickets (6)`} />
        <Label label={`Cruises, Sailing & Water Tours (92)`} />
        <Label label={`Day Trips & Excursions (130)`} />
        <Label label={`Tours & Sightseeing (146)`} />
      </div>
    </div>
  );
};
