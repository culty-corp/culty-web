import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LikeIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import * as Map from '../../../Maps';


const styles = theme => ({
    botao: {
        color: '#ff9703',
    },
    botaoShare: {
        color: '#ff9703',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '32%',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        color: '#FF8C00',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class ConteudoActions extends React.Component {

    render() {
        const { classes, postagemAtual } = this.props;

        return (
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Cultyr" className={classes.botao} onClick={() => this.props.passarPost()}>
                    <LikeIcon />
                </IconButton>
                <IconButton aria-label="Compartilhar" className={classes.botaoShare}>
                    <ShareIcon />
                </IconButton>
                {
                    postagemAtual.tipoMidia === "Texto" &&
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.props.expanded,
                        })}
                        onClick={() => this.props.expandirPostagem()}
                        aria-expanded={this.props.expanded}
                        aria-label="Quero ler mais"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
            </CardActions>
        );
    }
}

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    return {
        postagemAtual
    };
};

export default withRouter(
    connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(ConteudoActions))
);