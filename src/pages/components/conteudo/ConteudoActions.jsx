import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LikeIcon from "@material-ui/icons/ThumbUp";
import DislikeIcon from "@material-ui/icons/ThumbDown";
import ShareIcon from "@material-ui/icons/Share";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import classnames from "classnames";
import * as Map from "../../../Maps";
import styles from "./conteudoActionsStyle";
import MediaQuery from "react-responsive";

import Grid from "@material-ui/core/Grid";

const ConteudoActions = props => {
  const { classes, postagemAtual } = props;

  return (
    <div>
      <MediaQuery query="(min-device-width: 768px)">
        <CardActions className={classes.actions} disableActionSpacing>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <IconButton
              aria-label="Dislike"
              className={classes.botaoDislike}
              onClick={() => props.passarPost()}
            >
              <DislikeIcon />
            </IconButton>

            <IconButton
              aria-label="Compartilhar"
              className={classes.botaoShare}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="Cultyr"
              className={classes.botaoLike}
              onClick={() => props.passarPost()}
            >
              <LikeIcon />
            </IconButton>
          </Grid>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <CardActions className={classes.actions} disableActionSpacing>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <IconButton
              aria-label="Dislike"
              className={classes.botaoDislike}
              onClick={() => props.passarPost()}
            >
              <DislikeIcon />
            </IconButton>

            <IconButton
              aria-label="Compartilhar"
              className={classes.botaoShare}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="Cultyr"
              className={classes.botaoLike}
              onClick={() => props.passarPost()}
            >
              <LikeIcon />
            </IconButton>
          </Grid>
        </CardActions>
      </MediaQuery>
    </div>
  );
};

const mapStateToProps = store => {
  const postagemAtual = store.posts.postagemAtual;
  return {
    postagemAtual
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    Map.mapDispatchToProps
  )(withStyles(styles)(ConteudoActions))
);
