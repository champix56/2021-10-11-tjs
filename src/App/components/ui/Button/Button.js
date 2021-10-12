import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = (props) => {
  const [isClicked, setisClicked] = useState(false);

  useEffect(() => {
   console.log('%c%s','color:red;font-size:x-large', 'changement d\'etat cliqué du button')
  }, [isClicked])

  return (
    <button
      type={props.type}
      className={`${styles.Button} ${isClicked ? " " + styles.clicked : ""}`}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      onClick={(evt) => {
        //console.log(evt);
        setisClicked(true);
        setTimeout(() => {
          setisClicked(false);
        }, 200);

        props.lorsqueJeClique(
          "C'est bon j'ai ete cliqué, parent je t'informe !!! "
        );
      }}
    >
      {undefined !== props.children ? props.children : props.text}
      {/* <br/>{isClicked?'cliqué':'pas cliqué'} */}
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
Button.defaultProps = {
  bgColor: "skyblue",
  color: "white",
  lorsqueJeClique: () => {},
};
export default Button;
