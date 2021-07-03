import React from 'react';
import style from '../../sass/H3.module.scss';

const H3 = (props) => {
  return <h3 className={styleMedia.heading3}>{props.children}</h3>;
};

export default H3;
