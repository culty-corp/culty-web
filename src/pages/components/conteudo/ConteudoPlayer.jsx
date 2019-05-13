import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    botao: {
        color: '#ff9703',
    }
});

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