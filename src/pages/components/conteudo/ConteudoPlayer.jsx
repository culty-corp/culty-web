import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import styles from './style.js'

const ConteudoPlayer = (props) => {

    const { classes } = props;

    return (
        <div className={classes.details}>
            <div className={classes.controls}>
                <IconButton aria-label="Play/pause" className={classes.botao}>
                    <PlayArrowIcon className={classes.playIcon} />
                </IconButton>
            </div>
        </div>
    );
}

ConteudoPlayer.propTypes = {
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    return {
        postagemAtual
    };
};

export default withRouter(
    connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ConteudoPlayer))
);