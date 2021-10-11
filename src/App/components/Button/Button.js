import React from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props);
    return (
    <button
      type={props.type}
      className={styles.Button}
      style={{...props.style,backgroundColor:props.bgColor,color:props.color}}
      onClick={(evt) => {
        console.log(evt);
        props.lorsqueJeClique("C'est bon j'ai ete cliqué, parent je t'informe !!! ");
      }}
    >
      {undefined !== props.children ? props.children : props.text}
    </button>
  );
};
Button.propTypes = {
    lorsqueJeClique: PropTypes.func.isRequired,
    text: PropTypes.string,
    children: PropTypes.any,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object,
};
Button.defaultProps={
    bgColor: 'skyblue',
    color: 'white',
    lorsqueJeClique:()=>{}
}
export default Button;
