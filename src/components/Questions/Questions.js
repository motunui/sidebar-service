import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cls from './Questions.css';

export default ({ code }) => {
  return (
    <div className={cls.service_wrapper}>
      <div className={cls.service}>
        <div className={cls.service_header}>Questions?</div>
        <div className={cls.service_body}>
          Get in touch. We have 24/7 Support
        </div>
        <div className={cls.call_wrapper}>
          <span className={cls.icon_phone}>
            <FontAwesomeIcon icon="phone" flip="horizontal" />
          </span>
          <span>+1 855 275 5071</span>
        </div>
        <div>
          Product code: <span>19329P5</span>
        </div>
        {/* <div>
          Product code: <span>{code}</span>
        </div> */}
      </div>
    </div>
  );
};
