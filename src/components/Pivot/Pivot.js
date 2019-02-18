import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Label from '../Label/Label';
import cls from './Pivot.css';
import pizzaImage from '../../assets/pizzaImage.jpg';

export default (params) => {
  return (
    <div className={cls.pivot_wrapper}>
      <div className={cls.pivot_product}>
        <span className={cls.pivot_header}>Related Punta Cana Experiences</span>
        <div className={cls.pivot_photo}>
          <img src={pizzaImage} className={cls.pivot_image} />
        </div>
        <div className={cls.label_container}>
          <div className={cls.label_tag_group}>
            <Label label={`Featured Tours and Tickets (6)`} />
            <Label label={`Cruises, Sailing & Water Tours (92)`} />
            <Label label={`Day Trips & Excursions (130)`} />
            <Label label={`Tours & Sightseeing (146)`} />
          </div>
        </div>
        <div className={cls.pivot_see}>
          <a className={cls.pivot_link}>
            See all Punta Cana tours and tickets{' '}
            <span className={cls.pivot_chevron}>
              <FontAwesomeIcon icon="chevron-circle-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
