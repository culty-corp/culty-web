import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';    
import * as Map from '../../../Maps';


const styles = theme => ({
    estiloTexto: {
        color: '#ECF2EC'
    },
    estiloSubTitulo: {
        color: '#FFDEB5'
    },
    avatar: {
        backgroundColor: '#FF8C00',
    },
    botao: {
        color: '#ff9703',
    },
    actions: {
        display: 'flex',
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

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, postagemAtual } = this.props;

        return (
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites" className={classes.botao} onClick={() => this.props.passarPost()}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share" className={classes.botao}>
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
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
            </CardActions>
        );
    }
}

ConteudoActions.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const posts = store.posts;
    return {
        ...posts
    };
};

export default withRouter(
    connect(mapStateToProps, Map.mapDispatchToProps)(withStyles(styles)(ConteudoActions))
);