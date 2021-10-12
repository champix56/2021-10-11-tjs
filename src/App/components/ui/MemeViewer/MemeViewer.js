import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.css";
export const demoMeme = {
  meme: {
    id: 0,
    imageId: 0,
    text: "j'ai dit les function c'est mieux que les class",
    x: 10,
    y: 200,
    fontSize: 50,
    fontWeight: "900",
    color: "BLUE",
    underline: true,
    italic: true,
  },
  image: {
    url: "/img/memes/1ermeme.jpg",
    titre: "1er meme",
    id: 0,
    w: 1000,
    h: 938,
  },
};
const MemeViewer = (props) => (
  <svg
    className={styles.MemeViewer}
    data-testid="MemeViewer"
    viewBox={`0 0 ${props.image?props.image.w:1024} ${props.image?props.image.h:1024}`}
  >
    {props.image&&<image href={props.image.url} />}
    <text
      x={props.meme.x}
      y={props.meme.y}
      fill={props.meme.color}
      style={{
        fontWeight: props.meme.fontWeight,
        fontSize: props.meme.fontSize,
        textDecoration: props.meme.underline ? "underline" : "none",
        fontStyle: props.meme.italic ? "italic" : "normal",
      }}
    >
      {props.meme.text}
    </text>
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
