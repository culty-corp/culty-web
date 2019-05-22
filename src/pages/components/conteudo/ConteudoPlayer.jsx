import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styles from "./conteudoPlayerStyle";

const ConteudoPlayer = props => {
  const { classes } = props;

  return (
    <div>
      <IconButton aria-label="Play/Pause" className={classes.botao}>
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
    </div>
  );
};

ConteudoPlayer.propTypes = {
  theme: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(mapStateToProps)(
    withStyles(styles, { withTheme: true })(ConteudoPlayer)
  )
);
