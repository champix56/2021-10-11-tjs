import React from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props);
  var classValue=props.className && props.className.includes('warning')?styles.Button+' '+styles.warning:styles.Button;
    return (
    <button
      type={props.type}
      className={classValue}
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
    className: PropTypes.string,
};
export default Button;
