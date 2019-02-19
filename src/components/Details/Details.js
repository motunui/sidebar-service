import React, { useState, useEffect } from 'react';

import cls from './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pizzaImage from '../../assets/pizzaImage.jpg';

export default ({ match }) => {
  const [details, setDetails] = useState(
    Array.from(Array(6).keys(), (x) => x + 1)
  );

  return (
    <div className={cls.details_wrapper}>
      <div className={cls.map_wrapper}>
        <div className={cls.map_static}>
          <span>
            <img src={pizzaImage} />
          </span>
        </div>
      </div>
      <div className={cls.details_header}>Key Details</div>
      <div className={cls.details_body}>
        <ul>
          {details.map((detail, i) => {
            return (
              <li className={cls.item} key={i}>
                <span className={cls.item_icon}>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </span>
                <span className={cls.item_text}>
                  Altos de Chavon Rio Chavon and 2 more
                </span>
              </li>
              // <li className={cls.item} key={`${detail.icon}_${i}`}>
              //   <span className={cls.item_icon}>
              //     <FontAwesomeIcon icon={`${detail.icon}`} />
              //   </span>
              //   <span className={cls.item_text}>
              //     Altos de Chavon Rio Chavon and 2 more

              //   </span>
              // </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
