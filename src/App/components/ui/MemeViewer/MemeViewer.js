import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.css";

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer">
    MemeViewer Component
  </svg>
);

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {
  meme: {
    id: 0,
    imageId: 0,
    text: 'Mon 1er meme',
    x: 10,
    y: 10,
    fontSize: 10,
    fontWeight: '900',
    color: 'BLUE',
    underline: true,
    italic: false,
  },
  image: {
    url: '/img/memes/1ermeme.jpg',
    titre:'1er meme',
    id: 0,
    w: 1000,
    h: 938,
  },
};

export default MemeViewer;
