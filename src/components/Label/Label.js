import React from 'react';

import cls from './Label.css';

export default ({ label }) => {
  return (
    <label className={cls.label_button}>
      <a className={cls.label_tag}>{label}</a>
    </label>
  );
};
