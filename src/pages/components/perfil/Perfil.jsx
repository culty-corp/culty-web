import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from './style.js'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardActions from "@material-ui/core/CardActions";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import LikeIcon from "@material-ui/icons/ThumbUp";
import DislikeIcon from "@material-ui/icons/ThumbDown";
import VisibilityIcon from "@material-ui/icons/Visibility";
import * as Hg from '../../../assets/hg.jpg'

class Perfil extends React.Component {
    state = { expanded: false };

    expandirPostagem = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, postagemAtual } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar src={Hg} aria-label="Recipe" className={classes.avatar}>
                        </Avatar>
                    }
                    classes={{
                        title: classes.estiloTexto,
                        subheader: classes.estiloSubTitulo,
                    }}
                    title='Humberto Gessinger'
                    subheader={<div> 11 <VisibilityIcon /> </div>}
                />
                <CardContent>
                    <Typography component="p" className={classes.estiloTexto}>
                        Isso vai virar um perfil.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}

Perfil.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => {
    const postagemAtual = store.posts.postagemAtual;
    return {
        postagemAtual
    };
};

export default withRouter(
    connect(mapStateToProps)(withStyles(styles)(Perfil))
);