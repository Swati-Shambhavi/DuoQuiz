import React from 'react';
import style from '../../sass/Button.module.scss';
const Button = (props) => {
  return (
    <button onClick={props.onClickBtn} className={style.button}>
      {props.children}
    </button>
  );
};

export default Button;
